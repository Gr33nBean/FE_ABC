import TodayEvent from "../../Event/TodayEvent";
import Calendar from "../../Calendar";
import { useQuery } from "@tanstack/react-query";
import { Event } from "@/services/type";
import { eventService } from "@/services/event.service";

const RightMenu = () => {
  const { data } = useQuery<Event[]>({
    queryKey: ["all_events"],
    queryFn: async () => {
      const res = await eventService.getAll();
      if (res) {
        return res;
      } else {
        return [];
      }
    },
  });

  console.log(data);

  return (
    <div className="hidden lg:!flex min-w-[350px] pt-6 pb-[200px] flex-col gap-6 sticky top-0 h-[100svh] overflow-auto">
      <TodayEvent
        data={data?.filter((event) => {
          const eventDate = new Date(event.startAt * 1000);
          const today = new Date();
          return (
            eventDate.getDate() === today.getDate() &&
            eventDate.getMonth() === today.getMonth() &&
            eventDate.getFullYear() === today.getFullYear()
          );
        })}
      />
      <Calendar data={data} />
    </div>
  );
};

export default RightMenu;
