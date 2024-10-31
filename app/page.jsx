import Image from "next/image";
import rooms from "../data/rooms";
import RoomCard from "@/components/RoomCard";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <>
      <Heading title="Available Rooms" />
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard key={room.id} room={room} />)
      ) : (
        <p>No rooms available at the moment.</p>
      )}
    </>
  );
}
