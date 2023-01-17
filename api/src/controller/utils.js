const axios = require("axios");
const { Diets, Ingredients, Recipe, Steps } = require("../db.js");
const info = require("../../api.json");
const { YOUR_API_KEY } = process.env;

const llamadoApi = async () => {
  return await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&number=100`
  ).data;
};

const getdB = async () => {
  try {
    const infodB = await Recipe.findAll({
      include: [
        { model: Steps, include: { model: Ingredients } },
        { model: Diets },
      ],
    });
    // console.log(infodB)
    return infodB;
  } catch (err) {
    console.log(err);
  }
};

const getIngredientsApi = async () => {
  try {
    let ingre = [];
    info.results.forEach((element) => {
      element.analyzedInstructions.length > 0
        ? element.analyzedInstructions[0].steps.forEach((e) => {
            e.ingredients.length > 0
              ? e.ingredients.forEach((i) => {
                  ingre.push(i.name);
                })
              : ingre.push(null);
          })
        : ingre.push(null);
    });
    ingre = [...new Set(ingre)].filter((i) => i !== null);
    return ingre.map((i) => ({ name: i }));
  } catch (err) {
    console.log(err);
  }
};

const getDiets = async () => {
  try {
    let diets = [];
    let ginfo = await getallinfo();
    ginfo.forEach((e) => {
      e.diets.length > 0
        ? e.diets.forEach((i) => diets.push(i))
        : diets.push(null);
    });
    diets = [...new Set(diets)].filter((i) => i !== null);
    return diets.map((i) => ({ name: i }));
  } catch (err) {
    console.log(err);
  }
};

const getallinfoApi = async () => {
  try {
    const structRecipe = info.results.map((i) => ({
      image: i.image,
      origendata: "api",
      foodid: i.id,
      tittle: i.title,
      summary: i.summary,
      healthScore: i.healthScore,
      dishTypes:i.dishTypes === undefined ? []: i.dishTypes,
      diets: i.diets === undefined ? [] : i.diets.map((e) => ({ name: e })),
      steps:
        i.analyzedInstructions[0] === undefined
          ? []
          : i.analyzedInstructions[0].steps.map((e) => ({
              step: e.step,
              ingredients:
                e.ingredients === undefined
                  ? []
                  : e.ingredients.map((data) => ({
                      name: data.name,
                    })),
            })),
    }));
    return structRecipe;
  } catch (err) {
    console.log(err);
  }
};
const getallinfo = async () => {
  try {
    const infoApi = await getallinfoApi();
    const infodB = await getdB();
    let informacion = infoApi.concat(infodB)
    return informacion.map(element =>
      ({
        image: element.image,
        origendata: element.origendata,
        foodid: element.foodid,
        tittle: element.tittle,
        summary: element.summary,
        healthScore: element.healthScore.toString(),
        dishTypes:element.dishTypes === undefined ? []: element.dishTypes,
        diets: element.diets === undefined ? [] : element.diets.map((e) => e.name),
        steps: element.steps,
      })
      );
  } catch (err) {
    console.log(err);
  }
};
const getbyId = async (id) => {
  console.log(id);
  try {
    const a = await getallinfo();
    return a.filter((i) => i.foodid.toString() === id.toString());
  } catch (err) {
    console.log(err);
  }
};

const cagardatosDB = async () => {
  try {
    const diets = await getDiets(info);
    const ingredients = await getIngredientsApi(info);
    await Diets.bulkCreate(diets);
    await Ingredients.bulkCreate(ingredients);
    console.log("Dietas e Ingredientes Cargados en la Base de Datos");
  } catch (err) {
    console.log(err);
  }
};

const ingredientList = async () =>{
const list = await Ingredients.findAll()
// console.log(list)  
return  list
};



const postform = async (
  origendata,
  foodid,
  tittle,
  summary,
  healthScore,
  diets,
  steps,
  image,
  req,
  res
) => {
 
  try {
    const diets1 = await Diets.findAll({ where: { name: diets } });
    const a = await Recipe.create({
      origendata,
      foodid,
      tittle,
      summary,
      healthScore,
      image

    });
    a.addDiets(diets1);
    await Promise.all(
      steps.map((e) => {
        return Steps.create({ step: e.step }).then((Stepcreado) => {
          a.addSteps(Stepcreado);
          Promise.all(
            e.ingredients.map((ingred) => {
              return Ingredients.findOrCreate({ where: ingred }).then(
                (ingredientebuscadoencontrado) =>
                  Stepcreado.addIngredients(ingredientebuscadoencontrado[0])
              );
            })
          ).catch((err) => res.status(404).send({ msj: err }));
        });
      })
    ).catch((err) => res.status(404).send({ msj: err }));
    const receta = await Recipe.findOne({
      where: { foodid: foodid },
      include: [
        { model: Steps, include: { model: Ingredients } },
        { model: Diets },
      ],
    });

    return({ receta, msj: "Recipe Create Successful" });
  } catch (err) {
    console.log(err)
  }
};

module.exports = {
  getallinfo,
  cagardatosDB,
  getbyId,
  postform,
  getdB,
  getDiets,
  llamadoApi,
  ingredientList,
  getIngredientsApi
};

// traes toda la info con ...
//get all info...
///...luego verificas bn los modelos que debes crear...
//... las recetas cada una tiene un paso a paso...
//...recuerda que para los paso a paso...
//...debes crear una tabla para registrar cada paso...
// ... y luego crear una tabla para registrar los ingredientes....
/// de tal forma que los ingredentes se asocian a la tabla de de cada paso...
