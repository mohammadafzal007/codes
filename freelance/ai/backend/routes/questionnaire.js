const express = require('express');
const Response = require('../models/questionnaire');
const protect = require('../middleware/auth');
const router = express.Router();

router.post('/', protect, async (req, res) => {
  try {
    const { responses } = req.body;
    const response = new Response({
      user: req.user._id,
      responses
    });

    const data = await response.save();
    console.log("data", data)


    const processResponses = (data) => {
      const responses = data.responses;

      // Initialize counters for options A, B, and C
      let countA = 0;
      let countB = 0;
      let countC = 0;

      // Count occurrences of each option
      responses.forEach((response) => {
        if (response.option === 'A') {
          countA++;
        } else if (response.option === 'B') {
          countB++;
        } else if (response.option === 'C') {
          countC++;
        }
      });

      // Calculate the total number of responses
      const totalResponses = countA + countB + countC;

      // Calculate percentages
      const Vatt = (countA / totalResponses) * 100;
      const Pitta = (countB / totalResponses) * 100;
      const Kapha = (countC / totalResponses) * 100;

      // Determine body type based on the percentages
      let bodyType = "";
      let foodtaken = "";
      let foodavoid = "";

      if (Vatt >= 35 && Pitta < 35 && Kapha < 35) {
        bodyType = "Vatt dominant body type";
        foodtaken =
          "Beverages: Buttermilk, warm teas, nut milk, \nand warm or room temperature water. \n" +
          "Meat and eggs: Beef, chicken, turkey, and eggs.\n " +
          "Grains: Rice, oats, quinoa, and wheat. \n" +
          "Fruits: Berries, peaches, mangoes, melons, bananas,\n avocados, coconuts, and cooked apples.\n " +
          "Vegetables: Carrots, beets, squash, lentils, \n mung beans, sweet potatoes, and green, leafy vegetables. \n" +
          "Spices: Ginger, basil, bay, cinnamon, \n nutmeg, cloves, parsley, and turmeric.\n " +
          "Nuts and seeds: Almonds, chestnuts, cashews,\n pistachios, and sunflower and pumpkin seeds. \n" +
          "Oils: Ghee, avocado oil, coconut oil, \n sesame oil, and extra virgin olive oil.\n";
        foodavoid = 
          "Artichokes, bitter melon, broccoli, brussel sprouts,\n cabbage, carrots (raw), bell peppers,\n" +
          "cauliflower, celery, chillies, eggplant, corn, \n dandelion (green), kale, lettuce, mushroom, olive (green),\n" +
          "potato (white), radish, spinach (raw), sprout, tomato and turnip.\n";
      } else if (Pitta >= 35 && Vatt < 35 && Kapha < 35) {
        bodyType = "Pitta dominant body type \n";
        foodtaken = 
          "A hearty fruit salad (apples, pears, red grapes, and blueberries)\n garnished with raisins and shredded coconut.\n" +
          "Oatmeal or rice porridge made with hot milk \n" +
          "An egg white and vegetable omelet \n" +
          "Red lentils made with cooling herbs like cilantro, mint, or fennel, \n with buttered whole grain bread(use unsalted butter), sautéed purple cabbage, and a green salad.\n" +
          "Green mung beans with dill, paired with roasted asparagus and basmati rice.\n";
        foodavoid = 
          "Soy meat, miso, urad dal, and soy sauce. These things have \nhigh salty content and can aggravate pitta dosha.\n" +
          "Warming spices like ginger, cumin, black pepper, fenugreek,\n chilli pepper, cayenne and cloves should be avoided completely.\n";
      } else if (Kapha >= 35 && Vatt < 35 && Pitta < 35) {
        bodyType = "Kapha dominant body type\n";
        foodtaken = 
          "Lighter diet; dry, warm food and warm drinks;\n pungent, bitter, and astringent tastes.\n" +
          "Old grains (minimum one year), barley, \n millet, corn, buckwheat, rye, oats, wheat, rice.\n" +
          "Lassi (yoghurt and water drink -- preferably made thin),\n buttermilk, low-fat milk; small amount of ghee.\n" +
          "Apples, applesauce, apricots, berries, cherries, cranberries, figs (dry), \npeaches, pears, persimmons, pomegranate, prunes, raisins, strawberries.\n" +
          "Artichoke, asparagus, beets, broccoli, Brussel sprouts, cabbage, carrots, celery, corn,\n daikon radish, eggplant, garlic, green beans, green chilies,\n horseradish, kale, leafy greens, leeks, lettuce, mustard greens, okra, onions.\n";
        foodavoid = 
          "Avoid large quantities of food, especially at night;\n Avoid unctuous, cold, heavy food; minimize sweet, sour, and salty tastes.\n" +
          "Avoid new grains, especially wheat and rice.\n" +
          "Avoid sugar cane products, salts, nuts.\n" +
          "Avoid avocado, banana, coconut, dates, figs (fresh), grapefruit, kiwi,\n melons, oranges, papaya, pineapple, plums, rhubarb, watermelon.";
      } else if (Vatt >= 35 && Pitta >= 35 && Kapha < 35) {
        bodyType = "Vatt-Pitta dominant body type";
        foodtaken = "All sweet fruits, dates,raisins,Sweet and bitter vegetables.\n Rice, wheat, Milk, ghee.\n" +
          "Sunflower and olive oil, turmeric and coriander spices\n"
        foodavoid = "Frozen food, sour food and hot spicy food\n"
      } else if (Vatt >= 35 && Kapha >= 35 && Pitta < 35) {
        bodyType = "Vatt-Kapha dominant body type";
        foodtaken = 
          "Sweet fruits in less amount\n" +
          "Less amount of leaf vegetables, sprouts and beans\n " +
          "Lentils and soya milk\n" +
          "Olive oil, sesame oil in less amount.\n" +
          "Sunflower, pumpkin and flax seeds.\n";
        foodavoid = 
          "Sweets, gram pea, kidney pea and cold drink.\n";
      } else if (Vatt < 35 && Kapha >= 35 && Pitta >= 35) {
        bodyType = "Kapha-Pitta dominant body type";
        foodtaken = 
          "All sweet fruits but in less amount.\n" +
          "Green leafy vegetables, Oat meals,Buttermilk and goatmilk\n" +
          "Ginger and cumin\n" +
          "Less nuts but soaked in water\n";
        foodavoid = 
          "Less baked food, chocolate and pastry \n";
      } else if (Vatt >= 35 && Kapha >= 35 && Pitta >= 35) {
        bodyType = "Vatt-Pitta-Kapha dominant body type";
      }

      // Return the results
      return {
        Vatt: Vatt.toFixed(2),
        Pitta: Pitta.toFixed(2),
        Kapha: Kapha.toFixed(2),
        bodyType: bodyType,
        foodtaken:foodtaken,
        foodavoid:foodavoid
      };
    };



    const result = processResponses(data);
    console.log(result);



    res.status(201).json({ message: 'Response saved and prediction successful', result });



  } catch (err) {
    console.log("Error saving responses");
    res.status(400).json({ message: 'Error saving response', error: err.message });
  }
});

module.exports = router;