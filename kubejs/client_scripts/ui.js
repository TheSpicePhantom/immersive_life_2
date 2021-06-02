var spacing_multiplier = 1.1;

onEvent('ui.main_menu', event => {
  event.replace(ui => {
    ui.background('kubejs:textures/ui/background.png');
    ui.image(sp => {
      sp.enabled = true;
      sp.name = 'Singleplayer';
      sp.width = 192;
      sp.height = 64;
      sp.x = (ui.width - sp.width) / 2;
      sp.y = (ui.height - sp.height) / 2 - sp.height * spacing_multiplier;
      sp.action = 'minecraft:singleplayer';
      sp.setHoverText(['Singleplayer']);
      sp.texture = 'kubejs:textures/ui/';
      sp.hoverTexture = 'kubejs:textures/ui/';
    });

    ui.image(mp => {
      mp.enabled = true;
      mp.name = 'Multiplayer';
      mp.width = 192;
      mp.height = 64;
      mp.x = (ui.width - mp.width) / 2;
      mp.y = (ui.height - mp.height) / 2;
      mp.action = 'minecraft:multiplayer';
      mp.setHoverText(['Multiplayer']);
      mp.texture = 'kubejs:textures/ui/';
      mp.hoverTexture = 'kubejs:textures/ui/';
    });

    ui.image(q => {
      q.enabled = true;
      q.name = 'Quit';
      q.width = 32;
      q.height = 32;
      q.x = ui.width - q.width - 10;
      q.y = ui.height - q.height - 10;
      q.action = 'minecraft:quit';
      q.setHoverText(['Quit']);
      q.texture = 'kubejs:textures/ui/';
      q.hoverTexture = 'kubejs:textures/ui/';
    });

    ui.image(opt => {
      opt.enabled = true;
      opt.name = 'Options';
      opt.width = 32;
      opt.height = 32;
      opt.x = 0 + 10;
      opt.y = ui.height - opt.height - 10;
      opt.action = 'minecraft:options';
      opt.setHoverText(['Options']);
      opt.texture = 'kubejs:textures/ui/options.png';
      opt.hoverTexture = 'kubejs:textures/ui/options.png';
    });
  });
});
