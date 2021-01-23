events.listen('recipes', function (event) {
  // Temporary fix to allow players to convert between Mekanism and Eidolon Lead Ingots, since Eidolon has hard-coded its own Lead Ingots into some recipes.
  event.shapeless(Item.of('eidolon:lead_ingot', 1), 'mekanism:ingot_lead')
  event.shapeless(Item.of('mekanism:ingot_lead', 1), 'eidolon:lead_ingot')

  // Create
  event.shapeless(Item.of('create:brass_sheet', 1), ['create:brass_ingot', 'immersiveengineering:hammer'])
  event.shapeless(Item.of('create:lapis_sheet', 1), ['minecraft:lapis_block', 'immersiveengineering:hammer'])

  // Immersive Engineering
  event.shapeless(Item.of('immersiveengineering:ingot_silver', 9), '#forge:storage_blocks/silver')
  event.shapeless(Item.of('immersiveengineering:nugget_silver', 9), '#forge:ingots/silver')

  // Powah!
  event.shapeless(Item.of('powah:uraninite_raw_poor', 1), 'mekanism:ingot_uranium')
})