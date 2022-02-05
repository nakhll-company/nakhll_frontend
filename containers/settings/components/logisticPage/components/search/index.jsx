function Search({ placeholder, onChange }) {
  return (
    <>
      <input
        style={{
          padding: "10px",
          width: "100%",
          border: "1px solid  #CED4DA",
          margin: "10px 0",
          borderRadius: "10px",
        }}
        type="search"
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}

export default Search;
