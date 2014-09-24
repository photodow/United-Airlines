(function(){

	function authorizeUser(username, password){

		var session, l, i, user;

		session = false;
		l = users.length;

		for(i=0; i<l; i++){
			
			user = users[i];

			if(user.username === username && user.password === password){
				session = true;
				break;
			}
		}

		return session;
	}

	function login(){

		var that, username, password, session;

		that = $(this);
		username = that.find('[name="username"]').val();
		password = that.find('[name="password"]').val();

		session = authorizeUser(username, password);

		if(session){
			setSession(username);
			redirect();
		}else{
			errorMsg();
		}

		function setSession(username){
			// user's session needs to be set.;
		}

		function redirect(){
			location = 'pass.html';
		}

		function errorMsg(){

			var errorHTMLObj = that.find('.error');

			if(errorHTMLObj.length === 0){

				var msg, html;

				msg = 'Your username or password is incorrect. Please try again.';
				html = '<p class="error"><strong>Error:</strong> ' + msg + '</p>';

				that.prepend(html);
			}
		}

		return false;
	}

	$('.login').on('submit', login);

}());