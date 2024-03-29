import React from "react";
import moment from "moment";

const Entry = ({
  entry,
  update,
  deleteEntry,
  getEntryByCategories,
  handleViewChange,
}) => {
  return (
    <tr>
      <td className="date">{moment(entry.date).format("LL")}</td>
      <td
        className="description"
        onClick={() => {
          update(entry, "description");
        }}
      >
        {entry.description}
      </td>
      <td
        className="amount"
        onClick={() => {
          update(entry, "amount");
        }}
      >
        {entry.amount}
      </td>
      <td className="transactionType">{entry.transactionType}</td>
      <td
        className="category"
        onClick={() => {
          getEntryByCategories(entry.category);
          handleViewChange();
        }}
      >
        {entry.category}
      </td>
      <td className="accountName">{entry.accountName}</td>
      <button
        className="button"
        onClick={() => {
          deleteEntry(entry);
        }}
      >
        Delete
      </button>
    </tr>
  );
};

export default Entry;
