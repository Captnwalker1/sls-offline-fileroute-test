exports.handler = async event => {
    /* eslint-disable-next-line no-unused-vars */
    let { methodArn, authorizationToken } = event;
    
    let token = 'allow';
    if (token === 'allow') {
      const policy = genPolicy('allow', event.methodArn);
      const principalId = 'abcd1234defg5678';
      const context = {
        simpleAuth: true
      };
      const response = {
        principalId: principalId,
        policyDocument: policy,
        context: context
      };
      return response;
    } else if (token == 'deny') {
      const policy = genPolicy('deny', event.methodArn);
      const principalId = 'abcd1234defg5678';
      const context = {
        simpleAuth: true
      };
      const response = {
        principalId: principalId,
        policyDocument: policy,
        context: context
      };
      return response;
    } else {
      throw new Error('Unauthorized');
    }
  };
  
  function genPolicy(effect, resource) {
    const policy = {};
    policy.Version = '2012-10-17';
    policy.Statement = [];
    const stmt = {};
    stmt.Action = 'execute-api:Invoke';
    stmt.Effect = effect;
    stmt.Resource = resource;
    policy.Statement.push(stmt);
    return policy;
  }