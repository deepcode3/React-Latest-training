function List(props) {
  //   const fruits = [
  //     {
  //       id: 1,
  //       name: "apple",
  //       calories: 95,
  //     },
  //     { id: 2, name: "orange", calories: 45 },
  //     { id: 3, name: "banana", calories: 185 },
  //     { id: 4, name: "carrot", calories: 32 },
  //   ];
  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabitical
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); //Reverse Alphabatical
  //   fruits.sort((a, b) => a.name - b.name); //numeric
  //   fruits.sort((a, b) => b.name - a.name); //reverse numeric

  //   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  //   const listItems = fruits.map((fruit) => (
  //     <li key={fruit.id}>
  //       {fruit.name}:&nbsp;<b>{fruit.calories}</b>
  //     </li>
  //   ));
  //   const listCalItems = lowCalFruits.map((fruit) => (
  //     <li key={fruit.id}>
  //       {fruit.name}:&nbsp;<b>{fruit.calories}</b>
  //     </li>
  //   ));

  //props data mapping
  const category = props.category;
  const propslist = props.items;

  const propsItems = propslist.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}:&nbsp;<b>{fruit.calories}</b>
    </li>
  ));

  return (
    <>
      {/* <ol>{listItems}</ol>
      <ol>{listCalItems}</ol> */}
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{propsItems}</ol>
    </>
  );
}
export default List;
