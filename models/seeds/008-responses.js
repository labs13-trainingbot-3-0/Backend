exports.seed = async function(knex, Promise) {
  const responses = [
    {
      body: 'Hi, Training Bot!',
      notification_id: 1
    },
    {
      body: 'Where is the Security office? What are their hours?',
      notification_id: 3
    },
    {
      body: 'Do you validate parking?',
      notification_id: 3
    },
    {
      body: 'Is there a way to postpone my training series start date?',
      notification_id: 5
    },
    {
      body: 'Do you expense travels?',
      notification_id: 5
    },
    {
      body: 'Where can I find high fat, vegan food?',
      notification_id: 7
    },
    {
      body: `My driver's license has expired! What other forms of IDs do you accept?`,
      notification_id: 7
    },
    {
      body: 'Where can I find a campus map?',
      notification_id: 9
    },
    {
      body: 'Who is my point of contact at the Security office?',
      notification_id: 9
    }
  ]
  return await knex('responses').insert(responses)
}
