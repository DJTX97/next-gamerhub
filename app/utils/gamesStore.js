import { proxy } from "valtio";

export const gamesStore = proxy({ games: [] });
