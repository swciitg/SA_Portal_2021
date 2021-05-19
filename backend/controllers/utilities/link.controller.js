const Link = require("../../models/utilities/link");

exports.getAllLinks = async (req, res) => {
  try {
    const links = await Link.find({}).sort("priority_number");
    res.status(200).json({
      status: "success",
      data: {
        data: links,
      },
    });
  } catch (err) {
    console.log(err.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.postLink = async (req, res) => {
  try {
    const { name, priority_number } = req.body;
    const data = { name, priority_number: Number(priority_number) };
    const newLink = new Link(data);
    const link = await newLink.save();
    if (!link) {
      return res
        .status(424)
        .json({ status: "Failed", message: "Invalid data" });
    }
    res.status(200).json({
      status: "success",
      data: {
        data: link,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.editLink = async (req, res) => {
  try {
    const { name, priority_number } = req.body;
    const update = { name, priority_number: Number(priority_number) };
    const link = await Link.findByIdAndUpdate(req.params.link_id, update);
    if (!link) {
      return res
        .status(424)
        .json({ status: "Failed", message: "Invalid data" });
    }
    const link_id = req.params.link_id;
    const newLink = await Link.findById(link_id);
    res.status(200).json({
      status: "success",
      data: {
        data: newLink,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.deleteLink = async (req, res) => {
  try {
    const deletedLink = await Link.findByIdAndRemove(req.params.link_id);
    if (deletedLink)
      return res
        .status(200)
        .json({ status: "Success", message: "Successfully deleted" });
    else res.status(424).json({ status: "Failed", message: "Invalid Data" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.getAllSublinks = async (req, res) => {
  try {
    const link_id = req.params.link_id;
    const link = await Link.findById(link_id);
    if (!link) {
      return res
        .status(424)
        .json({ status: "Failed", message: "Invalid data" });
    }
    const sublinks = link.sublinks;
    sublinks.sort(compare);
    res.status(200).json({
      status: "success",
      data: {
        link,
        sublinks,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.postSublink = async (req, res) => {
  try {
    const link_id = req.params.link_id;
    const { name, url, priority_number } = req.body;
    const link = await Link.findById(link_id);
    if (!link) {
      return res
        .status(424)
        .json({ status: "Failed", message: "Invalid data" });
    }
    const sublink = { name, url, priority_number };
    let newSublink = link.sublinks.create(sublink);
    //console.log(newSublink);
    link.sublinks.push(newSublink);
    const updatedLink = await link.save();

    if (!updatedLink) {
      return res
        .status(424)
        .json({ status: "Failed", message: "Invalid data" });
    }
    res.status(200).json({
      status: "success",
      data: {
        updatedLink,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.editSublink = async (req, res) => {
  try {
    const link_id = req.params.link_id;
    const sublink_id = req.params.sublink_id;
    const { name, url, priority_number } = req.body;

    const link = await Link.findById(link_id);

    if (!link) {
      return res
        .status(424)
        .json({ status: "Failed", message: "Invalid data" });
    }

    let sublinks = link.sublinks;

    sublinks.forEach((sublink) => {
      if (sublink.id === sublink_id) {
        sublink.name = name;
        sublink.url = url;
        sublink.priority_number = priority_number;
      }
    });
    link.sublinks = sublinks;
    await link.save();
    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.deleteSublink = async (req, res) => {
  try {
    const link_id = req.params.link_id;
    const sublink_id = req.params.sublink_id;

    const link = await Link.findById(link_id);
    if (!link) {
      return res
        .status(424)
        .json({ status: "Failed", message: "Invalid data" });
    }
    let sublinks = link.sublinks;
    sublinks = sublinks.filter((sublink) => sublink.id != sublink_id);
    link.sublinks = sublinks;
    await link.save();
    res.status(200).json({
      status: "success",
      message: "successfully deleted",
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

const compare = (a, b) => {
  //console.log(a, b);
  return a.priority_number - b.priority_number;
};
