const models = require("./models");
// models.bounties.create({
//   name: "Han Solo",
//   wantedFor: "Owing Money",
//   reward: 500000,
//   captured: false,
// });

// models.hunters.create({
//   name: "Boba Fett",
//   client: "Jabba the Hutt",
//   active: true,
// });
// models.hunters.findOrCreate({
//   where: {
//     name: "Dengar",
//     client: "Mercurial Swift",
//     active: false,
//   },
// });

// const bounties = async () => {
//   const result = await models.bounties.findAll({});
//   console.log(result);
// };
// bounties();

// const bool = async () => {
//   const actives = await models.hunters.findAll({
//     where: {
//       active: true,
//     },
//   });
//   console.log(actives);
// };

// bool();

// const han = async () => {
//   const capture = await models.bounties.findOne({
//     where: {
//       name: "Han Solo",
//     },
//   });
//   if (!capture) {
//     console.log("not found");
//     return;
//   }
//   //   capture.update({ captured: true });
//   capture.captured = true;
//   capture.save();
// };
// han();

// const dengar = async () => {
//   const guy = await models.hunters.findOne({
//     where: {
//       name: "Dengar",
//     },
//   });
//   if (!guy) {
//     return;
//   }
//   guy.destroy();
// };
// dengar();

// models.hunters.findOrCreate({
//   where: {
//     name: "Dengar",
//     client: "Mercurial Swift",
//     active: false,
//   },
// });
