const AWS = require('aws-sdk')

const deleteTask = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        const { id } = event.pathParameters

        const result = await dynamodb.delete({
            TableName: 'TaskTable',
            Key: { id },
        }).promise()

        return {
            status: 204,
            body: 'Task deleted.'
        }

    } catch (error) {
        console.log(error)        
    }
}

module.exports = {
    deleteTask,
}
