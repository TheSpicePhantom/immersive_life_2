var toRemove = [
  'abstoneedition:copper_ore',
  'tconstruct:copper_ore',
  'miniutilities:ender_ore'
];

var toReAdd = [
  'abstoneedition:silver_ore'
];

var removal = toRemove.concat(toReAdd);

onEvent('worldgen.remove', event => {
  event.removeOres(ores => {
    ores.blocks = removal;
  });
});

onEvent('worldgen.add', event => {
  event.addOre(silver => {
    silver.block = toReAdd[0];
    silver.spawnsIn.blacklist = false;
    silver.spawnsIn.values = [
      '#minecraft:base_stone_overworld'
    ];
    silver.biomes.blacklist = false;
    silver.clusterMinSize = 3;
    silver.clusterMaxSize = 7;
    silver.clusterCount = 10;
    silver.minHeight = 4;
    silver.maxHeight = 20;
    silver.squared = true;
  });
});
