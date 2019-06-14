exports.seed = async function(knex, Promise) {
  const notifs = [
    {
      recipient_id: 1,
      send_date: knex.fn.now(),
      message_id: 1,
      service_id: 1,
      team_member_id: 1
    },
    {
      recipient_id: 2,
      send_date: knex.fn.now(),
      message_id: 2,
      service_id: 1,
      team_member_id: 2
    },
    {
      recipient_id: 2,
      send_date: knex.fn.now(),
      message_id: 3,
      service_id: 2,
      team_member_id: 2
    },
    {
      recipient_id: 3,
      send_date: knex.fn.now(),
      message_id: 4,
      service_id: 1,
      team_member_id: 3
    },
    {
      recipient_id: 3,
      send_date: knex.fn.now(),
      message_id: 5,
      service_id: 2,
      team_member_id: 3
    },
    {
      recipient_id: 4,
      send_date: knex.fn.now(),
      message_id: 6,
      service_id: 1,
      team_member_id: 4
    },
    {
      recipient_id: 4,
      send_date: knex.fn.now(),
      message_id: 7,
      service_id: 2,
      team_member_id: 4
    },
    {
      recipient_id: 5,
      send_date: knex.fn.now(),
      message_id: 8,
      service_id: 1,
      team_member_id: 5
    },
    {
      recipient_id: 5,
      send_date: knex.fn.now(),
      message_id: 9,
      service_id: 2,
      team_member_id: 5
    }
  ]
  return await knex('notifications').insert(notifs)
}
