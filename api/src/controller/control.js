const {
  postform,
  getDiets,
  getallinfo,
  getbyId,
  ingredientList,
  getIngredientsApi
} = require("../controller/utils.js");

const getbyDiets = async (req, res) => {
  try {
    const x = await getDiets();
    res.status(200).send(x);
  } catch {
    res.status(404).send({ mensaje: err });
  }
};

const getbyName = async (req, res, next) => {
  const { name } = req.query;
  // console.log(name);
  if (name && isNaN(name)) {
    try {
      let a = (await getallinfo()).filter((i) =>
        i.tittle.toUpperCase().includes(name.toUpperCase())
      );
      let b = a;
      if (b && b.length > 0) {
        res.send(JSON.stringify(b));
      } else {
        res.status(404).send(JSON.stringify({ msj: "Recipe not Found" }));
      }
    } catch (err) {
      console.log(err);
      res.status(404).send({ mensaje: err });
    }
  } else {
    next();
  }
};

const getbyFoodid = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    if (!isNaN(id)) {
      await getbyId(id).then((data) => res.status(200).send(data));
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
    res.status(404).send({ mensaje: err });
  }
};

const getInfo = async (req, res) => {
  try {
    await getallinfo().then((data) => res.status(200).send(JSON.stringify(data)));
  } catch (err) {
    res.status(404).send({ msj: err });
  }
};

const postRecipe = async (req, res) => {
  const { origendata, foodid, tittle, summary, healthScore, diets, steps,image } =
    req.body;
console.log(req.body)
  try {
    if (
      origendata &&
      foodid &&
      tittle &&
      summary &&
      healthScore &&
      diets &&
      steps &&
      image
    ) {
    const a =   await postform(
        origendata,
        foodid,
        tittle,
        summary,
        healthScore,
        diets,
        steps,
        image
      );
      res.status(200).send(a)
    } else {
      res.status(404).send({ msj: "No Creado, Faltan datos " });
    }
  } catch (err) {
    console.log(err);
    res.status(404).send({ msj: err });
  }
};

const listIngredients = async (req,res) => {
  try {
    const listaDb = await ingredientList();
    // listaDb = listaDb.map(i=>( i.dataValues.name))
    // console.log(listaDb[1].dataValues.name)
    res.status(200).send(listaDb)
  } catch (error) {
    res.status(404).send({ msj: error });
  }

}
module.exports = {
  getInfo,
  getbyDiets,
  getbyName,
  postRecipe,
  getbyFoodid,
  listIngredients
};
