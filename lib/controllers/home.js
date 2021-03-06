HomeController = new Stellar.Controller('home');

HomeController.index = function() {
  Stellar.render('listView');
};

HomeController.login = function() {
  Stellar.render('login');
};

HomeController.logout = function() {
  Meteor.call('logout', Session.get('auth'));
  Stellar.session.updateKey(false);
  Session.set('user', false);
  Session.set('auth', false);
  Stellar.redirect('/');
};
