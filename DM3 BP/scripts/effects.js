import { world, system, EquipmentSlot } from "@minecraft/server";

function armor() {
  for (const player of world.getPlayers()) {
    const eq = player.getComponent("minecraft:equippable");
    if (!eq) continue;

    const head  = eq.getEquipment(EquipmentSlot.Head);
    const chest = eq.getEquipment(EquipmentSlot.Chest);
    const legs  = eq.getEquipment(EquipmentSlot.Legs);
    const feet  = eq.getEquipment(EquipmentSlot.Feet);

    //water
    if (
      head?.typeId  === "dragonmounts:water_dragonscale_helmet" &&
      chest?.typeId === "dragonmounts:water_dragonscale_chestplate" &&
      legs?.typeId  === "dragonmounts:water_dragonscale_leggings" &&
      feet?.typeId  === "dragonmounts:water_dragonscale_boots"
    ) {
      player.addEffect("water_breathing", 10, { amplifier: 0 }); 
    }
    //terra
    if (
      head?.typeId  === "dragonmounts:terra_dragonscale_helmet" &&
      chest?.typeId === "dragonmounts:terra_dragonscale_chestplate" &&
      legs?.typeId  === "dragonmounts:terra_dragonscale_leggings" &&
      feet?.typeId  === "dragonmounts:terra_dragonscale_boots"
    ) {
      player.addEffect("haste", 10, { amplifier: 1 }); 
    }
    //storm
    if (
      head?.typeId  === "dragonmounts:storm_dragonscale_helmet" &&
      chest?.typeId === "dragonmounts:storm_dragonscale_chestplate" &&
      legs?.typeId  === "dragonmounts:storm_dragonscale_leggings" &&
      feet?.typeId  === "dragonmounts:storm_dragonscale_boots"
    ) {
      player.addEffect("slow_falling", 10, { amplifier: 0 }); 
    }
    //sunlight
    if (
      head?.typeId  === "dragonmounts:sunlight_dragonscale_helmet" &&
      chest?.typeId === "dragonmounts:sunlight_dragonscale_chestplate" &&
      legs?.typeId  === "dragonmounts:sunlight_dragonscale_leggings" &&
      feet?.typeId  === "dragonmounts:sunlight_dragonscale_boots"
    ) {
      player.addEffect("saturation", 10, { amplifier: 4 }); 
    }
    //moonlight
    if (
      head?.typeId  === "dragonmounts:moonlight_dragonscale_helmet" &&
      chest?.typeId === "dragonmounts:moonlight_dragonscale_chestplate" &&
      legs?.typeId  === "dragonmounts:moonlight_dragonscale_leggings" &&
      feet?.typeId  === "dragonmounts:moonlight_dragonscale_boots"
    ) {
      player.addEffect("night_vision", 10, { amplifier: 0 }); 
    }
    //ender
    if (
      head?.typeId  === "dragonmounts:ender_dragonscale_helmet" &&
      chest?.typeId === "dragonmounts:ender_dragonscale_chestplate" &&
      legs?.typeId  === "dragonmounts:ender_dragonscale_leggings" &&
      feet?.typeId  === "dragonmounts:ender_dragonscale_boots"
    ) {
      player.addEffect("resistance", 10, { amplifier: 2 });
      player.addEffect("strength", 10, { amplifier: 1 });
    }
    //fire
    if (
      head?.typeId  === "dragonmounts:fire_dragonscale_helmet" &&
      chest?.typeId === "dragonmounts:fire_dragonscale_chestplate" &&
      legs?.typeId  === "dragonmounts:fire_dragonscale_leggings" &&
      feet?.typeId  === "dragonmounts:fire_dragonscale_boots"
    ) {
      player.addEffect("fire_resistance", 10, { amplifier: 0 });
    }
    //forest
    if (
      head?.typeId  === "dragonmounts:forest_dragonscale_helmet" &&
      chest?.typeId === "dragonmounts:forest_dragonscale_chestplate" &&
      legs?.typeId  === "dragonmounts:forest_dragonscale_leggings" &&
      feet?.typeId  === "dragonmounts:forest_dragonscale_boots"
    ) {
      player.addEffect("regeneration", 10, { amplifier: 0 });
    }
    //enchant
    if (
      head?.typeId  === "dragonmounts:enchant_dragonscale_helmet" &&
      chest?.typeId === "dragonmounts:enchant_dragonscale_chestplate" &&
      legs?.typeId  === "dragonmounts:enchant_dragonscale_leggings" &&
      feet?.typeId  === "dragonmounts:enchant_dragonscale_boots"
    ) {
      player.addEffect("jump_boost", 10, { amplifier: 5 });
    }
    //zombie
    if (
      head?.typeId  === "dragonmounts:zombie_dragonscale_helmet" &&
      chest?.typeId === "dragonmounts:zombie_dragonscale_chestplate" &&
      legs?.typeId  === "dragonmounts:zombie_dragonscale_leggings" &&
      feet?.typeId  === "dragonmounts:zombie_dragonscale_boots"
    ) {
      player.addEffect("strength", 10, { amplifier: 2 });
    }
    //aether
    if (
      head?.typeId  === "dragonmounts:aether_dragonscale_helmet" &&
      chest?.typeId === "dragonmounts:aether_dragonscale_chestplate" &&
      legs?.typeId  === "dragonmounts:aether_dragonscale_leggings" &&
      feet?.typeId  === "dragonmounts:aether_dragonscale_boots"
    ) {
      player.addEffect("speed", 10, { amplifier: 1 });
    }
    //sculk
    if (
      head?.typeId  === "dragonmounts:sculk_dragonscale_helmet" &&
      chest?.typeId === "dragonmounts:sculk_dragonscale_chestplate" &&
      legs?.typeId  === "dragonmounts:sculk_dragonscale_leggings" &&
      feet?.typeId  === "dragonmounts:sculk_dragonscale_boots"
    ) {
      player.addEffect("darkness", 1, { amplifier: 0, showParticles: false });
      player.addEffect("resistance", 16, { amplifier: 1, showParticles: false });
      player.addEffect("strength", 16, { amplifier: 0, showParticles: false });
    }
  }

  // run every tick
  system.run(armor);
}

// Start the loop
system.run(armor);
