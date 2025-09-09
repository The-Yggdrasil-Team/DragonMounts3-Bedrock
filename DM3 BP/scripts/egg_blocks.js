import { world, system } from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe(initEvent => {
  initEvent.blockComponentRegistry.registerCustomComponent('aether_entity:trigger', {
    onPlayerInteract: e => {
      const { player, block } = e;
      const { x, y, z } = block.location;
      player.runCommandAsync(`setblock ${x} ${y} ${z} air`);
      player.runCommandAsync(`summon dragonmounts:aether_dragon_egg ${x} ${y} ${z} 1 0 hatching`);
      player.runCommandAsync(`scriptevent dm:guidebook aether_egg`);
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('enchant_entity:trigger', {
    onPlayerInteract: e => {
      const { player, block } = e;
      const { x, y, z } = block.location;
      player.runCommandAsync(`setblock ${x} ${y} ${z} air`);
      player.runCommandAsync(`summon dragonmounts:enchant_dragon_egg ${x} ${y} ${z} 1 0 hatching`);
      player.runCommandAsync(`scriptevent dm:guidebook enchant_egg`);
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('ender_entity:trigger', {
    onPlayerInteract: e => {
      const { player, block } = e;
      const { x, y, z } = block.location;
      player.runCommandAsync(`setblock ${x} ${y} ${z} air`);
      player.runCommandAsync(`summon dragonmounts:ender_dragon_egg ${x} ${y} ${z} 1 0 hatching`);
      player.runCommandAsync(`scriptevent dm:guidebook ender_egg`);
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('fire_entity:trigger', {
    onPlayerInteract: e => {
      const { player, block } = e;
      const { x, y, z } = block.location;
      player.runCommandAsync(`setblock ${x} ${y} ${z} air`);
      player.runCommandAsync(`summon dragonmounts:fire_dragon_egg ${x} ${y} ${z} 1 0 hatching`);
      player.runCommandAsync(`scriptevent dm:guidebook fire_egg`);
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('forest_entity:trigger', {
    onPlayerInteract: e => {
      const { player, block } = e;
      const { x, y, z } = block.location;
      player.runCommandAsync(`setblock ${x} ${y} ${z} air`);
      player.runCommandAsync(`summon dragonmounts:forest_dragon_egg ${x} ${y} ${z} 1 0 hatching`);
      player.runCommandAsync(`scriptevent dm:guidebook forest_egg`);
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('ice_entity:trigger', {
    onPlayerInteract: e => {
      const { player, block } = e;
      const { x, y, z } = block.location;
      player.runCommandAsync(`setblock ${x} ${y} ${z} air`);
      player.runCommandAsync(`summon dragonmounts:ice_dragon_egg ${x} ${y} ${z} 1 0 hatching`);
      player.runCommandAsync(`scriptevent dm:guidebook ice_egg`);
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('moonlight_entity:trigger', {
    onPlayerInteract: e => {
      const { player, block } = e;
      const { x, y, z } = block.location;
      player.runCommandAsync(`setblock ${x} ${y} ${z} air`);
      player.runCommandAsync(`summon dragonmounts:moonlight_dragon_egg ${x} ${y} ${z} 1 0 hatching`);
      player.runCommandAsync(`scriptevent dm:guidebook moonlight_egg`);
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('nether_entity:trigger', {
    onPlayerInteract: e => {
      const { player, block } = e;
      const { x, y, z } = block.location;
      player.runCommandAsync(`setblock ${x} ${y} ${z} air`);
      player.runCommandAsync(`summon dragonmounts:nether_dragon_egg ${x} ${y} ${z} 1 0 hatching`);
      player.runCommandAsync(`scriptevent dm:guidebook nether_egg`);
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('sculk_entity:trigger', {
    onPlayerInteract: e => {
      const { player, block } = e;
      const { x, y, z } = block.location;
      player.runCommandAsync(`setblock ${x} ${y} ${z} air`);
      player.runCommandAsync(`summon dragonmounts:sculk_dragon_egg ${x} ${y} ${z} 1 0 hatching`);
      player.runCommandAsync(`scriptevent dm:guidebook sculk_egg`);
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('skeleton_entity:trigger', {
    onPlayerInteract: e => {
      const { player, block } = e;
      const { x, y, z } = block.location;
      player.runCommandAsync(`setblock ${x} ${y} ${z} air`);
      player.runCommandAsync(`summon dragonmounts:skeleton_dragon_egg ${x} ${y} ${z} 1 0 hatching`);
      player.runCommandAsync(`scriptevent dm:guidebook skeleton_egg`);
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('storm_entity:trigger', {
    onPlayerInteract: e => {
      const { player, block } = e;
      const { x, y, z } = block.location;
      player.runCommandAsync(`setblock ${x} ${y} ${z} air`);
      player.runCommandAsync(`summon dragonmounts:storm_dragon_egg ${x} ${y} ${z} 1 0 hatching`);
      player.runCommandAsync(`scriptevent dm:guidebook storm_egg`);
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('sunlight_entity:trigger', {
    onPlayerInteract: e => {
      const { player, block } = e;
      const { x, y, z } = block.location;
      player.runCommandAsync(`setblock ${x} ${y} ${z} air`);
      player.runCommandAsync(`summon dragonmounts:sunlight_dragon_egg ${x} ${y} ${z} 1 0 hatching`);
      player.runCommandAsync(`scriptevent dm:guidebook sunlight_egg`);
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('terra_entity:trigger', {
    onPlayerInteract: e => {
      const { player, block } = e;
      const { x, y, z } = block.location;
      player.runCommandAsync(`setblock ${x} ${y} ${z} air`);
      player.runCommandAsync(`summon dragonmounts:terra_dragon_egg ${x} ${y} ${z} 1 0 hatching`);
      player.runCommandAsync(`scriptevent dm:guidebook terra_egg`);
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('water_entity:trigger', {
    onPlayerInteract: e => {
      const { player, block } = e;
      const { x, y, z } = block.location;
      player.runCommandAsync(`setblock ${x} ${y} ${z} air`);
      player.runCommandAsync(`summon dragonmounts:water_dragon_egg ${x} ${y} ${z} 1 0 hatching`);
      player.runCommandAsync(`scriptevent dm:guidebook water_egg`);
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('wither_entity:trigger', {
    onPlayerInteract: e => {
      const { player, block } = e;
      const { x, y, z } = block.location;
      player.runCommandAsync(`setblock ${x} ${y} ${z} air`);
      player.runCommandAsync(`summon dragonmounts:wither_dragon_egg ${x} ${y} ${z} 1 0 hatching`);
      player.runCommandAsync(`scriptevent dm:guidebook wither_egg`);
    }
  });
  initEvent.blockComponentRegistry.registerCustomComponent('zombie_entity:trigger', {
    onPlayerInteract: e => {
      const { player, block } = e;
      const { x, y, z } = block.location;
      player.runCommandAsync(`setblock ${x} ${y} ${z} air`);
      player.runCommandAsync(`summon dragonmounts:zombie_dragon_egg ${x} ${y} ${z} 1 0 hatching`);
      player.runCommandAsync(`scriptevent dm:guidebook zombie_egg`);
    }
  });
});


system.afterEvents.scriptEventReceive.subscribe(event => {
    const egg = event.sourceEntity
    const { x, y, z } = egg.location;
    if (event.id == 'dm:block') {
      if (event.message == 'aether') {
        egg.runCommandAsync(`setblock ${x} ${y} ${z} dragonmounts:aether_dragon_egg`);
        egg.runCommandAsync(`event entity @s despawn`);
      }
      if (event.message == 'enchant') {
        egg.runCommandAsync(`setblock ${x} ${y} ${z} dragonmounts:enchant_dragon_egg`);
        egg.runCommandAsync(`event entity @s despawn`);
      }
      if (event.message == 'ender') {
        egg.runCommandAsync(`setblock ${x} ${y} ${z} dragonmounts:ender_dragon_egg`);
        egg.runCommandAsync(`event entity @s despawn`);
      }
      if (event.message == 'fire') {
        egg.runCommandAsync(`setblock ${x} ${y} ${z} dragonmounts:fire_dragon_egg`);
        egg.runCommandAsync(`event entity @s despawn`);
      }
      if (event.message == 'forest') {
        egg.runCommandAsync(`setblock ${x} ${y} ${z} dragonmounts:forest_dragon_egg`);
        egg.runCommandAsync(`event entity @s despawn`);
      }
      if (event.message == 'ice') {
        egg.runCommandAsync(`setblock ${x} ${y} ${z} dragonmounts:ice_dragon_egg`);
        egg.runCommandAsync(`event entity @s despawn`);
      }
      if (event.message == 'moonlight') {
        egg.runCommandAsync(`setblock ${x} ${y} ${z} dragonmounts:moonlight_dragon_egg`);
        egg.runCommandAsync(`event entity @s despawn`);
      }
      if (event.message == 'nether') {
        egg.runCommandAsync(`setblock ${x} ${y} ${z} dragonmounts:nether_dragon_egg`);
        egg.runCommandAsync(`event entity @s despawn`);
      }
      if (event.message == 'sculk') {
        egg.runCommandAsync(`setblock ${x} ${y} ${z} dragonmounts:sculk_dragon_egg`);
        egg.runCommandAsync(`event entity @s despawn`);
      }
      if (event.message == 'skeleton') {
        egg.runCommandAsync(`setblock ${x} ${y} ${z} dragonmounts:skeleton_dragon_egg`);
        egg.runCommandAsync(`event entity @s despawn`);
      }
      if (event.message == 'storm') {
        egg.runCommandAsync(`setblock ${x} ${y} ${z} dragonmounts:storm_dragon_egg`);
        egg.runCommandAsync(`event entity @s despawn`);
      }
      if (event.message == 'sunlight') {
        egg.runCommandAsync(`setblock ${x} ${y} ${z} dragonmounts:sunlight_dragon_egg`);
        egg.runCommandAsync(`event entity @s despawn`);
      }
      if (event.message == 'terra') {
        egg.runCommandAsync(`setblock ${x} ${y} ${z} dragonmounts:terra_dragon_egg`);
        egg.runCommandAsync(`event entity @s despawn`);
      }
      if (event.message == 'water') {
        egg.runCommandAsync(`setblock ${x} ${y} ${z} dragonmounts:water_dragon_egg`);
        egg.runCommandAsync(`event entity @s despawn`);
      }
      if (event.message == 'wither') {
        egg.runCommandAsync(`setblock ${x} ${y} ${z} dragonmounts:wither_dragon_egg`);
        egg.runCommandAsync(`event entity @s despawn`);
      }
      if (event.message == 'zombie') {
        egg.runCommandAsync(`setblock ${x} ${y} ${z} dragonmounts:zombie_dragon_egg`);
        egg.runCommandAsync(`event entity @s despawn`);
      }
    }
  });

