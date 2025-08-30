import { world, system } from '@minecraft/server'

system.afterEvents.scriptEventReceive.subscribe(event => {
    const dragon = event.sourceEntity
    const { x, y, z } = dragon.getHeadLocation();
    const { x: dx, y: dy, z: dz } = dragon.getViewDirection();
    if (event.id == 'dm:shoot') {
    //dm_fireball
    if (event.message == 'dm_fireball') {
        dragon.playAnimation('animation.dragon.shoot', { blendOutTime: 4 });
        const existingVelocity = dragon.getVelocity();
        const dragonDirection = dragon.getViewDirection();
        const dragonRotation = dragon.getRotation();
        const { x, y, z } = dragon.getHeadLocation();
        const { x: dx, y: dy, z: dz } = dragon.getViewDirection();
        const fireball = dragon.dimension.spawnEntity('dragonmounts:dragon_fireball', {x: x + dx * 10,y: y + dy * 10,z: z + dz * 10});
        fireball.setRotation(dragonRotation);
        fireball.applyImpulse({x: existingVelocity.x + dragonDirection.x * 2,y: existingVelocity.y + dragonDirection.y * 2,z: existingVelocity.z + dragonDirection.z * 2});
    }
    //dm_breath
    if (event.message == 'dm_breath') {
        dragon.playAnimation('animation.dragon.shoot', { blendOutTime: 4 });
        const existingVelocity = dragon.getVelocity();
        const dragonDirection = dragon.getViewDirection();
        const dragonRotation = dragon.getRotation();
        const { x, y, z } = dragon.getHeadLocation();
        const { x: dx, y: dy, z: dz } = dragon.getViewDirection();
        const fireball = dragon.dimension.spawnEntity('dragonmounts:dragon_breath', {x: x + dx * 10,y: y + dy * 10,z: z + dz * 10});
        fireball.setRotation(dragonRotation);
        fireball.applyImpulse({x: existingVelocity.x + dragonDirection.x * 2,y: existingVelocity.y + dragonDirection.y * 2,z: existingVelocity.z + dragonDirection.z * 2});
    }
    }
})