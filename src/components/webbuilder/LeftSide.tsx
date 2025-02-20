import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { useListState } from "@mantine/hooks";
import cx from "clsx";
import { Text } from "@mantine/core";
import classes from "../draganddrop/DndList.module.css";

const data = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

export default function LeftSide() {
  const [state, handlers] = useListState(data);

  const items = state.map((item, index) => (
    <Draggable key={item.symbol} index={index} draggableId={item.symbol}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, {
            [classes.itemDragging]: snapshot.isDragging,
          })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Text className={classes.symbol}>{item.symbol}</Text>
          <div>
            <Text>{item.name}</Text>
            <Text c="dimmed" size="sm">
              Position: {item.position} • Mass: {item.mass}
            </Text>
          </div>
        </div>
      )}
    </Draggable>
  ));

  return (
    <div className="font-bold text-4xl border border-red-500 h-full w-80">
      <div>Draggable!</div>
      <DragDropContext
        onDragEnd={(props) => {
          //TODO: PAKAI STATE + PROPS.SOURCE.INDEX!
          // console.log("state", state);
          // console.log("source: ", props.source);

          // console.log("props", props);
          // console.log("handlers", handlers)
          // console.log("destination: ", destination);
          // handlers.reorder({
          //   from: props.source.index,
          //   // to: props.destination?.index || props.source.index,
          //   to: props.source.index,
          // });
        }}
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
