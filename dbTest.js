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
///
///
//7
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

////
///
// await queryInterface.addColumn("hunters", "bountyId", {
// //    type: Sequelize.DataTypes.INTEGER,
//
///
///
//
///////////Associaton///////////
//1
// const associations = async () => {
//   const han = await models.bounties.findOne({
//     where: {
//       name: "Han Solo",
//     },
//   });
//   const boba = await models.hunters.findOne({
//     where: {
//       name: "Boba Fett",
//     },
//   });
//   boba.setBounties(han);
//   //   han.Hunters(boba);
// };
//
// associations();
// const bobbaFett = async () =>
//   models.findOne({
//     where: {
//       name: "Bobba Fett",
//     },
//   });
// console.log(bobbaFett);

// hanSolo.addHunters(bobbaFett);
//2
// const getHanHunters = async () => {
//   const han = await models.bounties.finOne({
//     where: {
//       name: "Han Solo",
//     },
//   });
//   const hanHunters = await han.getHunters();
//   console.log(hanHunters);
// };

// getHanHunters();

////3
//
// const bobaBounty = async () => {
//   const boba = await models.hunters.findOne({
//     where: {
//       name: "Boba Fett",
//     },
//   });
//   const bBounty = await boba.getBounty();
//   console.log(bBounty);
// };

// bobaBounty();

///4
// const associateHan = async () => {
//   const hans = await models.bounties.findOne({
//     where: {
//       name: "Han Solo",
//     },
//   });
//   const dengar = await models.hunters.findOne({
//     where: {
//       name: "Dengar",
//     },
//   });
//   dengar.setBounties(hans);
// };
