import { world } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe(event => {
    const player = event.source;
    const item = event.itemStack;

    if (item?.typeId === "dm:guidebook") {
        openMainMenu(player);
    }
});

function openMainMenu(player) {
    const form = new ActionFormData()
        .title("Dragon Mounts 3: Introduction")
        .body("Choose a topic:")
        .button("§7General information", "textures/ui/infobulb")
        .button("§7Dragons", "textures/items/heads/ender")
        .button("§7Eggs", "textures/ui/dragon_egg")
        .button("§7special Materials", "textures/ui/icon_recipe_equipment")

    form.show(player).then((response) => {
        if (response.canceled) return;
        switch (response.selection) {
            case 0:
                General(player);
                break;
            case 1:
                Dragons(player);
                break;
            case 2:
                Eggs(player);
                break;
            case 3:
                Special(player);
                break;
        }
    })
}

function General(player) {
    const textPage = new ActionFormData()
        .title("General information")
        .body("Hello adventurer!\n\nThis is your guidebook.\n\nUse it to learn about the addon and all its features. Some topics might be locked for now but will unlock later on.\n\n"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}

function Dragons(player) {
    const form = new ActionFormData()
        .title("Dragons")
        .body("Choose an option:")
        .button("§7General information", "textures/ui/infobulb");
        if ( (player.getDynamicProperty("dm:aether_dragon")?? 0)===1) {form.button("§7Aether", "textures/items/heads/aether");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:ender_dragon")?? 0)===1) {form.button("§7Ender", "textures/items/heads/ender");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:enchant_dragon")?? 0)===1) {form.button("§7Enchant", "textures/items/heads/enchant");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:fire_dragon")?? 0)===1) {form.button("§7Fire", "textures/items/heads/fire");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:forest_dragon")?? 0)===1) {form.button("§7Forest", "textures/items/heads/forest");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:ice_dragon")?? 0)===1) {form.button("§7Ice", "textures/items/heads/ice");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:moonlight_dragon")?? 0)===1) {form.button("§7Moonlight", "textures/items/heads/moonlight");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:nether_dragon")?? 0)===1) {form.button("§7Nether", "textures/items/heads/nether");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:sculk_dragon")?? 0)===1) {form.button("§7Sculk", "textures/items/heads/sculk");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:skeleton_dragon")?? 0)===1) {form.button("§7Skeleton", "textures/items/heads/skeleton");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:storm_dragon")?? 0)===1) {form.button("§7Storm", "textures/items/heads/storm");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:sunlight_dragon")?? 0)===1) {form.button("§7Sunlight", "textures/items/heads/sunlight");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:terra_dragon")?? 0)===1) {form.button("§7Terra", "textures/items/heads/terra");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:water_dragon")?? 0)===1) {form.button("§7Water", "textures/items/heads/water");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:wither_dragon")?? 0)===1) {form.button("§7Wither", "textures/items/heads/wither");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:zombie_dragon")?? 0)===1) {form.button("§7Zombie", "textures/items/heads/zombie");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}

        form.show(player).then((response) => {
        if (response.canceled) return;
        switch (response.selection) {
            case 0:
                GeneralDragon(player);
                break;
            case 1:
                if ((player.getDynamicProperty("dm:aether_dragon")?? 0)===1) {AetherDragon(player);}
                break;
            case 2:
                if ((player.getDynamicProperty("dm:ender_dragon")?? 0)===1) {EnderDragon(player);}
                break;
            case 3:
                if ((player.getDynamicProperty("dm:enchant_dragon")?? 0)===1) {EnchantDragon(player);}
                break;
            case 4:
                if ((player.getDynamicProperty("dm:fire_dragon")?? 0)===1) {FireDragon(player);}
                break;
            case 5:
                if ((player.getDynamicProperty("dm:forest_dragon")?? 0)===1) {ForestDragon(player);}
                break;
            case 6:
                if ((player.getDynamicProperty("dm:ice_dragon")?? 0)===1) {IceDragon(player);}
                break;
            case 7:
                if ((player.getDynamicProperty("dm:moonlight_dragon")?? 0)===1) {MoonlightDragon(player);}
                break;
            case 8:
                if ((player.getDynamicProperty("dm:nether_dragon")?? 0)===1) {NetherDragon(player);}
                break;
            case 9:
                if ((player.getDynamicProperty("dm:sculk_dragon")?? 0)===1) {SculkDragon(player);}
                break;
            case 10:
                if ((player.getDynamicProperty("dm:skeleton_dragon")?? 0)===1) {SkeletonDragon(player);}
                break;
            case 11:
                if ((player.getDynamicProperty("dm:storm_dragon")?? 0)===1) {StormDragon(player);}
                break;
            case 12:
                if ((player.getDynamicProperty("dm:sunlight_dragon")?? 0)===1) {SunlightDragon(player);}
                break;
            case 13:
                if ((player.getDynamicProperty("dm:terra_dragon")?? 0)===1) {TerraDragon(player);}
                break;
            case 14:
                if ((player.getDynamicProperty("dm:water_dragon")?? 0)===1) {WaterDragon(player);}
                break;
            case 15:
                if ((player.getDynamicProperty("dm:wither_dragon")?? 0)===1) {WitherDragon(player);}
                break;
            case 16:
                if ((player.getDynamicProperty("dm:zombie_dragon")?? 0)===1) {ZombieDragon(player);}
                break;
        }
    })
}

function GeneralDragon(player) {
    const textPage = new ActionFormData()
        .title("§bGeneral information")
        .body("§7Dragons are magical creatures that can fly similar to ghasts and use a power jump to start flying.\n\n"+
            "Every dragon has its own taming and healing item afterwards every dragon can wear dragon armor, a saddle and a chest for storage. When interacting with it and holding a diamond shear then dragon scales can be obtained which are needed for the special weapons and with a glass bottse it will fill it up with dragon breath."+
            " Furthermore when riding the dragon and interacting with a blaze rod or dragon breath then the dragon will fire a projectile.\n\n"+
            "A dead dragon will remain as a corpse for around 15 minutes and then disappears. In that time it can be revived when interaction with the maching type of essecne."
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function AetherDragon(player) {
    const textPage = new ActionFormData()
        .title("§3Aether Dragon")
        .body("\n"+
            "Tame Item:  Amethyst shard or fish (no pufferfish)\n\n\n"+
            "Healing Item:  fish (no pufferfish)\n\n\n"+
            "Breeding Item:  Wind charge\n\n"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function EnchantDragon(player) {
    const textPage = new ActionFormData()
        .title("§dEnchant Dragon")
        .body("\n"+
            "Tame Item:  Book\n\n\n"+
            "Healing Item:  Amethyst shard\n\n\n"+
            "Breeding Item:  Xp bottle\n\n"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function EnderDragon(player) {
    const textPage = new ActionFormData()
        .title("§5Ender Dragon")
        .body("\n"+
            "Tame Item:  Dragon breath\n\n\n"+
            "Healing Item:  Corus fruit\n\n\n"+
            "Breeding Item:  Corus fruit\n\n"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function FireDragon(player) {
    const textPage = new ActionFormData()
        .title("§4Fire Dragon")
        .body("\n"+
            "Tame Item:  Fire charge\n\n\n"+
            "Healing Item:  Fire charge or blaze rod\n\n\n"+
            "Breeding Item:  Magma block\n\n"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function ForestDragon(player) {
    const textPage = new ActionFormData()
        .title("§2Forest Dragon")
        .body("\n"+
            "Tame Item:  Leaves\n\n\n"+
            "Healing Item: Sweet berries\n\n\n"+
            "Breeding Item:  Sapling\n\n"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function IceDragon(player) {
    const textPage = new ActionFormData()
        .title("§bIce Dragon")
        .body("\n"+
            "Tame Item:  Packed ice\n\n\n"+
            "Healing Item:  fish (no pufferfish)\n\n\n"+
            "Breeding Item:  Blue ice\n\n"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function MoonlightDragon(player) {
    const textPage = new ActionFormData()
        .title("§1Moonlight Dragon")
        .body("\n"+
            "Tame Item:  Glowstone\n\n\n"+
            "Healing Item:  Glowstone\n\n\n"+
            "Breeding Item:  Sea lantern\n\n"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function NetherDragon(player) {
    const textPage = new ActionFormData()
        .title("§4Nether Dragon")
        .body("\n"+
            "Tame Item:  Magma block\n\n\n"+
            "Healing Item:  Magma cream\n\n\n"+
            "Breeding Item:  Lava bucket\n\n"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function SculkDragon(player) {
    const textPage = new ActionFormData()
        .title("§3Sculk Dragon")
        .body("\n"+
            "Tame Item:  Sculk block\n\n\n"+
            "Healing Item:  Xp bottle\n\n\n"+
            "Breeding Item:  Echo shard\n\n"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function SkeletonDragon(player) {
    const textPage = new ActionFormData()
        .title("§fSkeleton Dragon")
        .body("\n"+
            "Tame Item:  Bone block\n\n\n"+
            "Healing Item:  Bone block\n\n\n"+
            "Breeding Item:  Skeleton skull\n\n"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function StormDragon(player) {
    const textPage = new ActionFormData()
        .title("§1Storm Dragon")
        .body("\n"+
            "Tame Item:  Prismarine shard\n\n\n"+
            "Healing Item:  Gunpowder\n\n\n"+
            "Breeding Item:  Phantom membrane\n\n"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function SunlightDragon(player) {
    const textPage = new ActionFormData()
        .title("§eSunlight Dragon")
        .body("\n"+
            "Tame Item:  Gold block\n\n\n"+
            "Healing Item:  Gold ingot\n\n\n"+
            "Breeding Item:  Golden apple\n\n"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function TerraDragon(player) {
    const textPage = new ActionFormData()
        .title("§6Terra Dragon")
        .body("\n"+
            "Tame Item:  Raw ore\n\n\n"+
            "Healing Item:  Clean stone or mud\n\n\n"+
            "Breeding Item:  Diamond\n\n"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function WaterDragon(player) {
    const textPage = new ActionFormData()
        .title("§1Water Dragon")
        .body("\n"+
            "Tame Item:  fish (no pufferfish)\n\n\n"+
            "Healing Item:  fish (no pufferfish)\n\n\n"+
            "Breeding Item:  Sea pickle\n\n"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function WitherDragon(player) {
    const textPage = new ActionFormData()
        .title("§8Wither Dragon")
        .body("\n"+
            "Tame Item:  Coal block\n\n\n"+
            "Healing Item:  Coal\n\n\n"+
            "Breeding Item:  Wither skeleton skull\n\n"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function ZombieDragon(player) {
    const textPage = new ActionFormData()
        .title("§2Zombie Dragon")
        .body("\n"+
            "Tame Item:  Soul soil\n\n\n"+
            "Healing Item:  Rotten flesh\n\n\n"+
            "Breeding Item:  Spider Eye\n\n"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}

function Eggs(player) {
    const form = new ActionFormData()
        .title("Dragon Eggs")
        .body("Choose an option:")
        .button("§7General information", "textures/ui/infobulb");
        if ( (player.getDynamicProperty("dm:aether_egg")?? 0)===1) {form.button("§7Aether", "textures/items/mountdragon_eggs/aether");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:ender_egg")?? 0)===1) {form.button("§7Ender", "textures/items/mountdragon_eggs/ender");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:enchant_egg")?? 0)===1) {form.button("§7Enchant", "textures/items/mountdragon_eggs/enchant");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:fire_egg")?? 0)===1) {form.button("§7Fire", "textures/items/mountdragon_eggs/fire");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:forest_egg")?? 0)===1) {form.button("§7Forest", "textures/items/mountdragon_eggs/forest");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:ice_egg")?? 0)===1) {form.button("§7Ice", "textures/items/mountdragon_eggs/ice");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:moonlight_egg")?? 0)===1) {form.button("§7Moonlight", "textures/items/mountdragon_eggs/moonlight");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:nether_egg")?? 0)===1) {form.button("§7Nether", "textures/items/mountdragon_eggs/nether");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:sculk_egg")?? 0)===1) {form.button("§7Sculk", "textures/items/mountdragon_eggs/sculk");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:skeleton_egg")?? 0)===1) {form.button("§7Skeleton", "textures/items/mountdragon_eggs/skeleton");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:storm_egg")?? 0)===1) {form.button("§7Storm", "textures/items/mountdragon_eggs/storm");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:sunlight_egg")?? 0)===1) {form.button("§7Sunlight", "textures/items/mountdragon_eggs/sunlight");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:terra_egg")?? 0)===1) {form.button("§7Terra", "textures/items/mountdragon_eggs/terra");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:water_egg")?? 0)===1) {form.button("§7Water", "textures/items/mountdragon_eggs/water");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:wither_egg")?? 0)===1) {form.button("§7Wither", "textures/items/mountdragon_eggs/wither");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:zombie_egg")?? 0)===1) {form.button("§7Zombie", "textures/items/mountdragon_eggs/zombie");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}

        form.show(player).then((response) => {
        if (response.canceled) return;
        switch (response.selection) {
            case 0:
                GeneralEgg(player);
                break;
            case 1:
                if ((player.getDynamicProperty("dm:aether_egg")?? 0)===1) {AetherEgg(player);}
                break;
            case 2:
                if ((player.getDynamicProperty("dm:ender_egg")?? 0)===1) {EnderEgg(player);}
                break;
            case 3:
                if ((player.getDynamicProperty("dm:enchant_egg")?? 0)===1) {EnchantEgg(player);}
                break;
            case 4:
                if ((player.getDynamicProperty("dm:fire_egg")?? 0)===1) {FireEgg(player);}
                break;
            case 5:
                if ((player.getDynamicProperty("dm:forest_egg")?? 0)===1) {ForestEgg(player);}
                break;
            case 6:
                if ((player.getDynamicProperty("dm:ice_egg")?? 0)===1) {IceEgg(player);}
                break;
            case 7:
                if ((player.getDynamicProperty("dm:moonlight_egg")?? 0)===1) {MoonlightEgg(player);}
                break;
            case 8:
                if ((player.getDynamicProperty("dm:nether_egg")?? 0)===1) {NetherEgg(player);}
                break;
            case 9:
                if ((player.getDynamicProperty("dm:sculk_egg")?? 0)===1) {SculkEgg(player);}
                break;
            case 10:
                if ((player.getDynamicProperty("dm:skeleton_egg")?? 0)===1) {SkeletonEgg(player);}
                break;
            case 11:
                if ((player.getDynamicProperty("dm:storm_egg")?? 0)===1) {StormEgg(player);}
                break;
            case 12:
                if ((player.getDynamicProperty("dm:sunlight_egg")?? 0)===1) {SunlightEgg(player);}
                break;
            case 13:
                if ((player.getDynamicProperty("dm:terra_egg")?? 0)===1) {TerraEgg(player);}
                break;
            case 14:
                if ((player.getDynamicProperty("dm:water_egg")?? 0)===1) {WaterEgg(player);}
                break;
            case 15:
                if ((player.getDynamicProperty("dm:wither_egg")?? 0)===1) {WitherEgg(player);}
                break;
            case 16:
                if ((player.getDynamicProperty("dm:zombie_egg")?? 0)===1) {ZombieEgg(player);}
                break;
        }
    })
}
function GeneralEgg(player) {
    const textPage = new ActionFormData()
        .title("§bGeneral information")
        .body("Dragons eggs can be found arround the world in side dragon nests. Each type has 2 nest variants and every nest has 1 egg. \n\nYou can break the egg and take it home (and hatch it there) or start the hatching process right away by tapping on the egg (like an attack)\n\n"+
            "Starting the hatching process will unlock everything there is to know about this egg type. In case it doesn't you can simply interact with the hatching egg while holing the guidebook to unlock it.\n\n"+
            "After around 40 minutes, when the egg hatches, it will unlock everything there is to know about the dragon type.\n\n"+
            "If interacted with while sneaking then the egg turns back in to a block and can be mined again.\n\n\n"+
            "Eggs can change their type upon starting the hatching process but only into the types that can be found in their dimension and if the right blocks are placed around it. An exception to that are the 3 eggs that aren't found but obtained by striking a specific egg with lightning while the egg is hatching."
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function AetherEgg(player) {
    const textPage = new ActionFormData()
        .title("§3Aether Egg")
        .body("The Aether Egg is found in nests hovering above the bottom in the overworld."+ 
            "If you want to change an other egg into an aether egg then place a dragon nest block underneath it and and surround it with amethyst blocks.\n\n"+
            "Items to speed up the hatching process:    Wind charge"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function EnchantEgg(player) {
    const textPage = new ActionFormData()
        .title("§dEnchant Dragon")
        .body("Enchant Eggs can be found in the end. If you want to change an other egg into a enchant egg then place an enchant table underneath and surround it with book shelfs.\n\n"+
            "Items to speed up the hatching process:    Eye of ender"
        )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function EnderEgg(player) {
    const textPage = new ActionFormData()
        .title("§5Ender Dragon")
        .body("Ender Eggs can be found in the end. If you want to change an other dragon egg into a ender egg then place a nest block underneath and surround it with end stone bricks.\n\n"+
            "Items to speed up the hatching process:    Eye of ender"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function FireEgg(player) {
    const textPage = new ActionFormData()
        .title("§4Fire Dragon")
        .body("Fire Eggs can be found in the overworld on top of hills or stony shores. If you want to change an other dragon egg into a fire egg then place a nest block underneath and surround it with netherrack and place fire on top of the nether rack.\n\n"+
            "Items to speed up the hatching process:    Fire charge"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function ForestEgg(player) {
    const textPage = new ActionFormData()
        .title("§2Forest Dragon")
        .body("Forest Eggs can be found in the overworld in every forest except the pale garden. If you want to change an other dragon egg into a forest egg then place a nest block underneath and surround it with oak logs.\n\n"+
            "Items to speed up the hatching process:    Sweet berries"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function IceEgg(player) {
    const textPage = new ActionFormData()
        .title("§bIce Dragon")
        .body("Ice Eggs can be found in the overworld in nearly all snow coverd biomes. If you want to change an other dragon egg into a ice egg then place a nest block underneath and surround it with ice.\n\n"+
            "Items to speed up the hatching process:    Ice block"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function MoonlightEgg(player) {
    const textPage = new ActionFormData()
        .title("§1Moonlight Dragon")
        .body("Moonlight Eggs can be found in the overworld flying above the ocean. If you want to change an other dragon egg into a moonlight egg then place a nest block underneath and surround it with glowstone.\n\n"+
            "Items to speed up the hatching process:    Glowstone dust"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function NetherEgg(player) {
    const textPage = new ActionFormData()
        .title("§4Nether Dragon")
        .body("Nether Eggs can be found in the nether. If you want to change an other dragon egg into a nether egg then place a nest block underneath and surround it with lava.\n\n"+
            "Items to speed up the hatching process:    Blaze rod"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function SculkEgg(player) {
    const textPage = new ActionFormData()
        .title("§3Sculk Dragon")
        .body("Sculk Eggs can be rarely obtained when lightning strikes a forest egg.\n\n"+
            "Items to speed up the hatching process:    Sculk block"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function SkeletonEgg(player) {
    const textPage = new ActionFormData()
        .title("§fSkeleton Dragon")
        .body("Skeleton Eggs can be found in the nether. If you want to change an other dragon egg into a skeleton egg then place a nest block underneath and replace the corners of the 3x3 square arround it with bone blocks (4 blocks) and place sould camp fires on top.\n\n"+
            "Items to speed up the hatching process:    Bone"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function StormEgg(player) {
    const textPage = new ActionFormData()
        .title("§1Storm Dragon")
        .body("Storm Eggs can be rarely obtained when lightning strikes a water egg.\n\n"+
            "Items to speed up the hatching process:    Gunpowder"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function SunlightEgg(player) {
    const textPage = new ActionFormData()
        .title("§eSunlight Dragon")
        .body("Sunlight Eggs can be found in the overworld in deserts and badlands. If you want to change an other dragon egg into a sunlight egg then place a nest block underneath and replace the corners of the 3x3 square arround it with gold blocks (4 blocks) and place glowstone blocks inbetween.\n\n"+
            "Items to speed up the hatching process:    Sunflower"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function TerraEgg(player) {
    const textPage = new ActionFormData()
        .title("§6Terra Dragon")
        .body("Terra Eggs can be found in the overworld in deserts and badlands. If you want to change an other dragon egg into a terra egg then place a nest block underneath and surround it with mud.\n\n"+
            "Items to speed up the hatching process:    Coarse dirt"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function WaterEgg(player) {
    const textPage = new ActionFormData()
        .title("§1Water Dragon")
        .body("Water Eggs can be found in the overworld swimming on top of the ocean. If you want to change an other dragon egg into a water egg then place a nest block underneath and surround it with water.\n\n"+
            "Items to speed up the hatching process:    Water bucket"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function WitherEgg(player) {
    const textPage = new ActionFormData()
        .title("§8Wither Dragon")
        .body("Wither Eggs can be rarely obtained when lightning strikes a skeleton egg.\n\n"+
            "Items to speed up the hatching process:    wither skeleton skull"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function ZombieEgg(player) {
    const textPage = new ActionFormData()
        .title("§2Zombie Dragon")
        .body("Zombie Eggs can be found in the nether. If you want to change an other dragon egg into a zombie egg then place a nest block underneath and replace the corners of the 3x3 square arround it with soul soil (4 blocks) and place soul sand inbetween.\n\n"+
            "Items to speed up the hatching process:    Rotten flesh"
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}

function Special(player) {
    const form = new ActionFormData()
        .title("Special Material")
        .body("Choose an option:")
        .button("§7General information", "textures/ui/infobulb");
        if ( (player.getDynamicProperty("dm:special")?? 0)===1) {form.button("§7Dragon scaples", "textures/items/scales/aether_dragon_scales");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:special")?? 0)===1) {form.button("§7Armor", "textures/ui/icon_armor");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}
        if ( (player.getDynamicProperty("dm:special")?? 0)===1) {form.button("§7Tools", "textures/ui/icon_iron_pickaxe");} 
        else {form.button("§4§lLocked","textures/blocks/barrier");}

        form.show(player).then((response) => {
        if (response.canceled) return;
        switch (response.selection) {
            case 0:
                GeneralSpecial(player);
                break;
            case 1:
                if ((player.getDynamicProperty("dm:special")?? 0)===1) {Scales(player);}
                break;
            case 2:
                if ((player.getDynamicProperty("dm:special")?? 0)===1) {Armor(player);}
                break;
            case 3:
                if ((player.getDynamicProperty("dm:special")?? 0)===1) {Tools(player);}
                break;
        }
    })
}

function GeneralSpecial(player) {
    const textPage = new ActionFormData()
        .title("§bGeneral information")
        .body("In this part are all new items listed and their abilities. These items are unlocked when shearing a dragon for the first time."
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function Scales(player) {
    const textPage = new ActionFormData()
        .title("§bGeneral information")
        .body("Scales are a material to craft the different tools and armor. You can obtain more by shearing a dragon with diamond shears from time to time."
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function Armor(player) {
    const textPage = new ActionFormData()
        .title("§bGeneral information")
        .body("Use the Dragon scales to craft the armor sets. The recipe is the same as for an iron or diamond armor. Every armor set gives its own unique effect."
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}
function Tools(player) {
    const textPage = new ActionFormData()
        .title("§bGeneral information")
        .body("Use the Dragon scales to craft yourself tools. These don't have any unique effects."
            )
        .button("§cBack")
        .button("§aClose");

    textPage.show(player).then((response) => {
        if (response.canceled) return;
        if (response.selection === 0) {openMainMenu(player);}
    })
}