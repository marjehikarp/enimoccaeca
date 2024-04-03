const assert = require('assert');

const stripMentionsFromRepoDesc = (description) => description ? description.replace(/\[maintainer=@[^\]]+\]/g, '') : '';

assert.strictEqual(stripMentionsFromRepoDesc('Repo desc 2 [maintainer=@abc,@xx]'), 'Repo desc 2');
