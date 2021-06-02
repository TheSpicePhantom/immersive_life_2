onEvent('item.registry', event => {
  event.create('mineral_nugget').displayName('Mineral Nugget').group('misc');
  event.create('mineral_chunk').displayName('Mineral Chunk').group('misc');
  event.create('diamond_nugget').displayName('Diamond Chip').group('misc');
  event.create('emerald_nugget').displayName('Emerald Chip').group('misc');
});

onEvent('block.registry', event => {
  event.create('dust_block').material('sand').hardness(0.1).displayName('Block of Dust');
});
