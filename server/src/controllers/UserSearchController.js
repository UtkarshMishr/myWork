const User = require('../models/User')
const db = require('../models/index')
const Op = db.Sequelize.Op

module.exports = {
    async showUsers(req, res) {
        var dbquery
        var whereStatement = [];
        try {
            let users = null

            if (req.body.username == 'all') {
                try {
                    users = await User.all({})
                    res.status(200).json(users)
                } catch (err) {
                    console.log(err.toString())
                    res.status(400).send({
                        error: 'Below Error occur, please contact support',
                        Msg: err.toString()
                    })
                }
            } else {

                if (req.body.username)
                    whereStatement.push({
                        username: {
                            [Op.like]: '%' + req.body.username + '%'
                        }
                    })
                if (req.body.user_emp_id)
                    whereStatement.push({
                        user_emp_id: {
                            [Op.like]: '%' + req.body.user_emp_id + '%'
                        }
                    })
                if (req.body.full_name)
                    whereStatement.push({
                        full_name: {
                            [Op.like]: '%' + req.body.full_name + '%'
                        }
                    })
                if (req.body.user_id)
                    whereStatement.push({
                        user_id: {
                            [Op.like]: '%' + req.body.user_id + '%'
                        }
                    })
                if (req.body.cost_center)
                    whereStatement.push({
                        cost_center: {
                            [Op.like]: '%' + req.body.cost_center + '%'
                        }
                    })
                if (req.body.businessunit_id)
                    whereStatement.push({
                        businessunit_id: {
                            [Op.like]: '%' + req.body.businessunit_id + '%'
                        }
                    })
                if (req.body.division_id)
                    whereStatement.push({
                        division_id: {
                            [Op.like]: '%' + req.body.division_id + '%'
                        }
                    })
                if (req.body.role_id)
                    whereStatement.push({
                        role_id: {
                            [Op.like]: '%' + req.body.role_id + '%'
                        }
                    })
                if (req.body.region_id)
                    whereStatement.push({
                        region_id: {
                            [Op.like]: '%' + req.body.region_id + '%'
                        }
                    })
                if (req.body.rescategory_id)
                    whereStatement.push({
                        rescategory_id: {
                            [Op.like]: '%' + req.body.rescategory_id + '%'
                        }
                    })
                if (req.body.costcategory_id)
                    whereStatement.push({
                        costcategory_id: {
                            [Op.like]: '%' + req.body.costcategory_id + '%'
                        }
                    })

                try {
                    users = await User.findAll({
                        // where: whereStatement.toString()
                        where: {
                            [Op.or]: whereStatement
                        },
                        order: [
                            ['user_id', 'ASC']
                        ]
                    })
                    res.status(200).json(users)
                } catch (err) {
                    console.log(err.toString())
                    res.status(400).send({
                        error: 'Below Error occur, please contact support',
                        Msg: err.toString()
                    })
                }

            }
            console.log(req.body.username)
        } catch (err) {
            console.log(err.toString())
            res.status(400).send({
                error: 'Below Error occur, please contact support',
                Msg: err.toString()
            })
        }
    }
}