import { format } from "date-fns";

export const getToday = () => format(new Date(), "EEEEEE");
export const getNow = () => format(new Date(), "p");
