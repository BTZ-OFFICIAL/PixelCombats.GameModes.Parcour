import { Color } from 'pixel_combats/basic';
import { Teams } from 'pixel_combats/room';

export const RED_TEAM_NAME = "VIPs";
export const BLUE_TEAM_NAME = "PLAYERs";
export const RED_TEAM_DISPLAY_NAME = "Teams/VIPs";
export const BLUE_TEAM_DISPLAY_NAME = "Teams/PLAYERs";
export const BLUE_TEAM_SPAWN_POINTS_GROUP = 1;
export const RED_TEAM_SPAWN_POINTS_GROUP = 2;

export function create_team_red() {
    Teams.Add(VIPs_TEAM_NAME, VIPs_TEAM_DISPLAY_NAME, new Color(1, 0, 0, 0));
    Teams.Get(VIPs_TEAM_NAME).Spawns.SpawnPointsGroups.Add(VIPs_TEAM_SPAWN_POINTS_GROUP);
    return Teams.Get(VIPs_TEAM_NAME);
}

export function create_team_blue() {
    Teams.Add(PLAYERs_TEAM_NAME, PLAYERs_TEAM_DISPLAY_NAME, new Color(0, 0, 1, 0));
    Teams.Get(PLAYERs_TEAM_NAME).Spawns.SpawnPointsGroups.Add(PLAYERs_TEAM_SPAWN_POINTS_GROUP);
    return Teams.Get(PLAYERs_TEAM_NAME);
}
