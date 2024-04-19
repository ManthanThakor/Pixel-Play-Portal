
// for profile upload

var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  
// for name and status 

document.getElementById('edit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const imageSrc = document.getElementById('preview-image').src;
    const name = document.getElementById('name').value;
    const status = document.getElementById('status').value;

    const profileCard = `
      <div class="card">
        <form id="edit-form">
          <h1>Profile Card</h1>
          <label class="custom-file-upload fas">
            <div class="img-wrap">
              <img src="${imageSrc}"/>
            </div>
          </label>
          <div class="name">${name}</div>
          <div class="status">${status}</div>
          <button type="submit" class="edit">Edit Profile</button>
        </form>
      </div>
    `;
    
    document.getElementById('root').innerHTML = profileCard;
    
    document.getElementById('edit-form').addEventListener('submit', function(event) {
      event.preventDefault();
      renderEditForm();
    });
  });