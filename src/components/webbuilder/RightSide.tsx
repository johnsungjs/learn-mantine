import { DragDropContext, Droppable } from "@hello-pangea/dnd";

export default function RightSide() {
  return (
    <div className="border border-blue-500 w-full">
      <div>Droppable!</div>
      <DragDropContext
        onDragEnd={(props) => {
          console.log(props.destination);
        }}
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="border-2 border-purple-400">
              {/* {items} */}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
