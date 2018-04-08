function mapAwsRole(user, context, callback) {

    user.awsRole = 'arn:aws:iam::361294756335:role/masterRole';
    user.awsRoleSession = user.name;

    context.samlConfiguration.mappings = {
        'https://aws.amazon.com/SAML/Attributes/Role': 'awsRole',
        'https://aws.amazon.com/SAML/Attributes/RoleSessionName': 'awsRoleSession'
    };

    callback(null, user, context);

}