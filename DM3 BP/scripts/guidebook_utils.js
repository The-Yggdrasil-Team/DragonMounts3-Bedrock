import { world, system } from "@minecraft/server";


system.afterEvents.scriptEventReceive.subscribe(event => {
    const entity = event.sourceEntity
    if (event.id == 'dm:guidebook') {
        const players = entity.dimension.getPlayers({location: entity.location,closest: 1});
        if (players.length === 0) return; 
        const player = players[0];
//eggs
        if (event.message == 'aether_egg') {
            if (player.getDynamicProperty("dm:aether_egg")?? 0 === 0) {
                player.setDynamicProperty("dm:aether_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Aether egg unlocked!");}
        };
        if (event.message == 'enchant_egg') {
            if (player.getDynamicProperty("dm:enchant_egg")?? 0 === 0) {
                player.setDynamicProperty("dm:enchant_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Enchant egg unlocked!");}
        };
        if (event.message == 'ender_egg') {
            if ((player.getDynamicProperty("dm:ender_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:ender_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Ender egg unlocked!");}
        };
        if (event.message == 'fire_egg') {
            if ((player.getDynamicProperty("dm:fire_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:fire_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Fire egg unlocked!");}
        };
        if (event.message == 'forest_egg') {
            if ((player.getDynamicProperty("dm:forest_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:forest_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Forest egg unlocked!");}
        };
        if (event.message == 'ice_egg') {
            if ((player.getDynamicProperty("dm:ice_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:ice_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Ice egg unlocked!");}
        };
        if (event.message == 'moonlight_egg') {
            if ((player.getDynamicProperty("dm:moonlight_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:moonlight_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Moonlight egg unlocked!");}
        };
        if (event.message == 'nether_egg') {
            if ((player.getDynamicProperty("dm:nether_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:nether_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Nether egg unlocked!");}
        };
        if (event.message == 'sculk_egg') {
            if ((player.getDynamicProperty("dm:sculk_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:sculk_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Sculk egg unlocked!");}
        };
        if (event.message == 'skeleton_egg') {
            if ((player.getDynamicProperty("dm:skeleton_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:skeleton_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Skeleton egg unlocked!");}
        };
        if (event.message == 'storm_egg') {
            if ((player.getDynamicProperty("dm:storm_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:storm_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Storm egg unlocked!");}
        };
        if (event.message == 'sunlight_egg') {
            if ((player.getDynamicProperty("dm:sunlight_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:sunlight_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Sunlight egg unlocked!");}
        };
        if (event.message == 'terra_egg') {
            if ((player.getDynamicProperty("dm:terra_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:terra_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Terra egg unlocked!");}
        };
        if (event.message == 'water_egg') {
            if ((player.getDynamicProperty("dm:water_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:water_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Water egg unlocked!");}
        };
        if (event.message == 'wither_egg') {
            if ((player.getDynamicProperty("dm:wither_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:wither_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Wither egg unlocked!");}
        };
        if (event.message == 'zombie_egg') {
            if ((player.getDynamicProperty("dm:zombie_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:zombie_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Zombie egg unlocked!");}
        };
//dragons
        if (event.message == 'aether_dragon') {
            if ((player.getDynamicProperty("dm:aether_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:aether_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Aether dragon unlocked!");}
        };
        if (event.message == 'enchant_dragon') {
            if ((player.getDynamicProperty("dm:enchant_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:enchant_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Enchant dragon unlocked!");}
        };
        if (event.message == 'ender_dragon') {
            if ((player.getDynamicProperty("dm:ender_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:ender_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Ender dragon unlocked!");}
        };
        if (event.message == 'fire_dragon') {
            if ((player.getDynamicProperty("dm:fire_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:fire_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Fire dragon unlocked!");}
        };
        if (event.message == 'forest_dragon') {
            if ((player.getDynamicProperty("dm:forest_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:forest_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Forest dragon unlocked!");}
        };
        if (event.message == 'ice_dragon') {
            if ((player.getDynamicProperty("dm:ice_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:ice_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Ice dragon unlocked!");}
        };
        if (event.message == 'moonlight_dragon') {
            if ((player.getDynamicProperty("dm:moonlight_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:moonlight_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Moonlight dragon unlocked!");}
        };
        if (event.message == 'nether_dragon') {
            if ((player.getDynamicProperty("dm:nether_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:nether_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Nether dragon unlocked!");}
        };
        if (event.message == 'sculk_dragon') {
            if ((player.getDynamicProperty("dm:sculk_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:sculk_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Sculk dragon unlocked!");}
        };
        if (event.message == 'skeleton_dragon') {
            if ((player.getDynamicProperty("dm:skeleton_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:skeleton_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Skeleton dragon unlocked!");}
        };
        if (event.message == 'storm_dragon') {
            if ((player.getDynamicProperty("dm:storm_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:storm_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Storm dragon unlocked!");}
        };
        if (event.message == 'sunlight_dragon') {
            if ((player.getDynamicProperty("dm:sunlight_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:sunlight_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Sunlight dragon unlocked!");}
        };
        if (event.message == 'terra_dragon') {
            if ((player.getDynamicProperty("dm:terra_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:terra_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Terra dragon unlocked!");}
        };
        if (event.message == 'water_dragon') {
            if ((player.getDynamicProperty("dm:water_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:water_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Water dragon unlocked!");}
        };
        if (event.message == 'wither_dragon') {
            if ((player.getDynamicProperty("dm:wither_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:wither_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Wither dragon unlocked!");}
        };
        if (event.message == 'zombie_dragon') {
            if ((player.getDynamicProperty("dm:zombie_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:zombie_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Zombie dragon unlocked!");}
        };
//items
        if (event.message == 'special') {
            if ((player.getDynamicProperty("dm:special")?? 0) === 0) {
                player.setDynamicProperty("dm:special", 1);
                player.sendMessage("§2 [Guidebook]§r Special materials unlocked!");}
        };
    }
    if (event.id == 'dm:guidebook') {
        const players = entity.dimension.getPlayers({location: entity.location,closest: 1});
        if (players.length === 0) return; 
        const player = players[0];
//eggs
        if (event.message == 'unlock_all') {
            if ((player.getDynamicProperty("dm:aether_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:aether_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Aether egg unlocked!");}
            if ((player.getDynamicProperty("dm:enchant_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:enchant_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Enchant egg unlocked!");}
            if ((player.getDynamicProperty("dm:ender_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:ender_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Ender egg unlocked!");}
            if ((player.getDynamicProperty("dm:fire_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:fire_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Fire egg unlocked!");}
            if ((player.getDynamicProperty("dm:forest_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:forest_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Forest egg unlocked!");}
            if ((player.getDynamicProperty("dm:ice_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:ice_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Ice egg unlocked!");}
            if ((player.getDynamicProperty("dm:moonlight_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:moonlight_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Moonlight egg unlocked!");}
            if ((player.getDynamicProperty("dm:nether_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:nether_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Nether egg unlocked!");}
            if ((player.getDynamicProperty("dm:sculk_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:sculk_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Sculk egg unlocked!");}
            if ((player.getDynamicProperty("dm:skeleton_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:skeleton_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Skeleton egg unlocked!");}
            if ((player.getDynamicProperty("dm:storm_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:storm_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Storm egg unlocked!");}
            if ((player.getDynamicProperty("dm:sunlight_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:sunlight_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Sunlight egg unlocked!");}
            if ((player.getDynamicProperty("dm:terra_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:terra_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Terra egg unlocked!");}
            if ((player.getDynamicProperty("dm:water_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:water_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Water egg unlocked!");}
            if ((player.getDynamicProperty("dm:wither_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:wither_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Wither egg unlocked!");}
            if ((player.getDynamicProperty("dm:zombie_egg")?? 0) === 0) {
                player.setDynamicProperty("dm:zombie_egg", 1);
                player.sendMessage("§2 [Guidebook]§r Zombie egg unlocked!");}
//dragons
            if ((player.getDynamicProperty("dm:aether_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:aether_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Aether dragon unlocked!");}
            if ((player.getDynamicProperty("dm:enchant_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:enchant_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Enchant dragon unlocked!");}
            if ((player.getDynamicProperty("dm:ender_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:ender_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Ender dragon unlocked!");}
            if ((player.getDynamicProperty("dm:fire_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:fire_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Fire dragon unlocked!");}
            if ((player.getDynamicProperty("dm:forest_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:forest_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Forest dragon unlocked!");}
            if ((player.getDynamicProperty("dm:ice_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:ice_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Ice dragon unlocked!");}
            if ((player.getDynamicProperty("dm:moonlight_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:moonlight_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Moonlight dragon unlocked!");}
            if ((player.getDynamicProperty("dm:nether_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:nether_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Nether dragon unlocked!");}
            if ((player.getDynamicProperty("dm:sculk_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:sculk_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Sculk dragon unlocked!");}
            if ((player.getDynamicProperty("dm:skeleton_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:skeleton_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Skeleton dragon unlocked!");}
            if ((player.getDynamicProperty("dm:storm_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:storm_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Storm dragon unlocked!");}
            if ((player.getDynamicProperty("dm:sunlight_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:sunlight_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Sunlight dragon unlocked!");}
            if ((player.getDynamicProperty("dm:terra_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:terra_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Terra dragon unlocked!");}
            if ((player.getDynamicProperty("dm:water_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:water_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Water dragon unlocked!");}
            if ((player.getDynamicProperty("dm:wither_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:wither_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Wither dragon unlocked!");}
            if ((player.getDynamicProperty("dm:zombie_dragon")?? 0) === 0) {
                player.setDynamicProperty("dm:zombie_dragon", 1);
                player.sendMessage("§2 [Guidebook]§r Zombie dragon unlocked!");}
//items
            if ((player.getDynamicProperty("dm:special")?? 0) === 0) {
                player.setDynamicProperty("dm:special", 1);
                player.sendMessage("§2 [Guidebook]§r Special materials unlocked!");}
        };
    }
});

