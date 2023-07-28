const AWS = require('aws-sdk')

const getByIdTask = async (event) => {
   try {
    const dynamodb = new AWS.DynamoDB.DocumentClient()
    const { id } = event.pathParameters

    console.log("id------->",id)

    const result = await dynamodb.get({
        TableName: 'TaskTable',
        Key: {
            id: id,
        }
    }).promise()

    console.log("------->",result)

    const task = result.Item

    console.log("task---->",task)

    return {
        status: 200,
        body: task
    }
   } catch (error) {
    console.log(error)
   }
}

module.exports = {
    getByIdTask,
}