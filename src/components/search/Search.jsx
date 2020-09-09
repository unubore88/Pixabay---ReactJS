import React, { useState, useEffect } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import getDataFromApi from "../../api/api-request";
import ImageResults from "../image-results/Image-results";
import Paginate from "../pagination/Pagination";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [nbrOfItem, setNbrOfItem] = useState(15);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(3);
  const [totalImage, setTotalImage] = useState(0);
  const [detectNewSearch, setDetectNewSearch] = useState(false);
  const totalPage = Math.ceil(totalImage / nbrOfItem);

  const getData = async () => {
    const res = await getDataFromApi(searchInput, nbrOfItem, page);
    setData(res.data.hits);
    setTotalImage(res.data.totalHits);
  };

  const onChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const onChangeNbrOfItem = (e, index, value) => {
    setNbrOfItem(value);
  };

  const getNewPage = (newPage) => {
    setPage(newPage);
  };

  const onSubmitSearch = () => {
    setDetectNewSearch(true);
    getData();
    setTimeout(() => {
      setDetectNewSearch(false);
    }, 200);
  };

  useEffect(() => {
    getData();
  }, [nbrOfItem, page]);

  return (
    <div>
      <TextField
        name="search text"
        floatingLabelText="Rechercher"
        value={searchInput}
        onChange={onChangeSearchInput}
      />
      <button
        onClick={() => {
          onSubmitSearch();
        }}
      >
        Valider
      </button>
      <br />
      <SelectField value={nbrOfItem} onChange={onChangeNbrOfItem}>
        <MenuItem value={5} primaryText="5" />
        <MenuItem value={10} primaryText="10" />
        <MenuItem value={15} primaryText="15" />
        <MenuItem value={20} primaryText="20" />
      </SelectField>
      {data && <ImageResults images={data} />}
      <Paginate
        totalPage={totalPage}
        currentPage={getNewPage}
        detectNewSearch={detectNewSearch}
      />
    </div>
  );
};

export default Search;
