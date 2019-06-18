import React from "react";

const ListGroup = props => {
	const {
		items,
		textProperty,
		valueProperty,
		onItemSelect,
		selectedItem
	} = props;
	return (
		<ul className="list-group" style={{ cursor: "pointer" }}>
			{items.map(item => (
				<li
					onClick={() => onItemSelect(item)}
					className={
						item === selectedItem ? "list-group-item active" : "list-group-item"
					}
					key={item[valueProperty]}>
					{item[textProperty]}{" "}
				</li>
			))}
		</ul>
	);
};
ListGroup.defaultProps = {
	textProperty: "name",
	valueProperty: "_id"
};

export default ListGroup;
