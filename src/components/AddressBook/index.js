import React from "react";
import "./styles.css";
import data from "./data.json";
import btcLogo from "../../assets/btc.svg";
import ethLogo from "../../assets/ETH.png";
import ltcLogo from "../../assets/ltc.svg";
import bchLogo from "../../assets/bch.svg";
import { ReactComponent as EditLogo } from "../../assets/edit.svg";
import { ReactComponent as DeleteLogo } from "../../assets/delete.svg";
import { useMediaQuery } from "react-responsive";

//can also add custom className

const AssetCell = ({ text }) => {
	let image = (
		<img
			src={
				text === "BTC"
					? btcLogo
					: text === "ETH"
					? ethLogo
					: text === "LTC"
					? ltcLogo
					: bchLogo
			}
			alt="Asset"
			className="mr-2"
		/>
	);
	return (
		<p className="mb-0 d-flex align-items-center">
			{image}
			{text}
		</p>
	);
};

const ActionCell = ({modal, setModal}) => {
	return (
		<span className="d-flex action-cell">
			<EditLogo className="action-logo" onClick={() => setModal(2)} />
			<DeleteLogo className="action-logo" onClick={() => setModal(3)}  />
			{/* <img src={editLogo} alt="Edit" />
      <img src={deleteLogo} alt="Delete" /> */}
		</span>
	);
};

const TableBodyCell = ({ data, id, modal, setModal }) => {
	if (id === "asset") {
		return (
			<div className="asset-cell">
				<AssetCell text={data[id]} />
			</div>
		);
	} else if (id === "actions") {
		return <ActionCell 
			modal={modal} 
			setModal={setModal} 
		/>;
	}
	return <p className="mb-0">{data[id]}</p>;
};

const AddressBookTable = ({modal, setModal}) => {
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	const headersData = [
		{
			title: "Asset",
			key: "asset",
			width: isMobile ? 60 : 190,
		},
		{
			title: "Nickname",
			key: "nickname",
			width: isMobile ? 140 : 230,
		},
		{
			title: "Address",
			key: "address",
			width: isMobile ? 290 : 390,
		},
		{
			title: "Date Added",
			key: "date",
			width: isMobile ? 120 : 230,
		},
		{
			title: "Actions",
			key: "actions",
			width: 100 /*change width in ActionCell as well*/,
		},
	];
	return (
		<table className="w-100 address-book-table">
			<tr className="w-100 d-flex p-4 table-header">
				{headersData.map((h) => (
					<th
						key={h.key}
						style={{
							width: h.width,
						}}
						className={`table-header-cell text-left ${h.className}`}
					>
						{h.title}
					</th>
				))}
			</tr>
			<div className="mr-3 table-body">
				{data.data.map((d) => (
					<tr className="w-100 d-flex p-4 table-row ">
						{headersData.map((h) => {
							return (
								<td
									style={{
										width: h.width,
									}}
									className={`text-left table-body-cell ${h.className}`}
								>
									<TableBodyCell
										key={h.key}
										data={d}
										{...h}
										id={h.key}
										modal={modal}
										setModal={setModal}
									/>
								</td>
							);
						})}
					</tr>
				))}
			</div>
		</table>
	);
};

function AddressBook({modal, setModal}) {
	return (
		<div
			className={`ml-sm-4 pt-sm-4 overflow-auto w-100 address-book-container`}
		>
			<h1 className="text-left font-weight-bold launch-pool-heading">
				Address Book
			</h1>
			<div className="mt-4 overflow-auto bg-white p-3 w-100 addressBookContainer">
				<AddressBookTable 
					modal={modal}
					setModal={setModal}
				/>
			</div>
		</div>
	);
}

//address-book

export default AddressBook;
