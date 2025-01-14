import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function WebBuilder() {
  return (
    <>
      <div className="flex w-screen h-screen">
        <LeftSide />
        <RightSide />
      </div>
    </>
  );
}
