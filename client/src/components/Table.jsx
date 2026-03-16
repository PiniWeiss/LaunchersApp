function Table({ dataTable }) {
  // if (!dataTable || dataTable.length === 0) {
  //   return <p>No data</p>; // or null / a spinner
  // }
  const headers = Object.keys(dataTable[0]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataTable.map((data, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header}>{data[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
