const Table= ({formno, subject, format,date,time}) => {
    return (
        <div >
            <table class="table-fixed w-full md:mx-5 my-5 text-center" style={{'box-shadow': 'rgba(0, 0, 0, 0.25) 0px 5px 15px'}}>
                <tbody class="ls">
                    <tr class="my-5">
                    <td class=" w-1/8 ds" >{formno}</td>
                    <td class="w-1/2 p-1 ds">{subject}</td>
                    <td class="w-1/8 p-1 ds">{format}</td>
                    <td class="w-1/8 p-1 ds">{date}</td>
                    <td class="w-1/8 p-1">{time}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;