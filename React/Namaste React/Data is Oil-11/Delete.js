const [isOpen, setIsOpen] = useState(true); // State to manage if the accordion is open or closed
const [indexShow, setIndexShow] = useState(0); // State to manage which accordion is open

// Parent.js (Your accordion example)
items.map((item, index) => (
  <AccordionItem
    key={index}
    // The child just needs to call this function.
    // The parent has already decided what will happen.
    setIndexShow={() => setIndexShow(index)}
    isOpen={index === showIndex} // Pass the open state for this item
  />
));

// Child: AccordionItem.js
const AccordionItem = ({ setIndexShow, isOpen }) => {
  // The child is simple. It doesn't know about indexes.
  return (
    <div onClick={setIndexShow}>
      isOpen &&{" "}
      <>
        <h1>This Accordian is openned</h1>
      </>
    </div>
  );
};
