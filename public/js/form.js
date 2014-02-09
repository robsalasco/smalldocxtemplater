  $(function() {
      $('#button-send').click(function() {
          BootstrapDialog.show({
              title: 'Confirmar envio',
              message: '¿Desea enviar los datos introducidos?',
              buttons: [{
                  label: 'Enviar',
                  cssClass: 'btn-primary',
                  action: function(dialogRef) {
                      dialogRef.enableButtons(false);
                      dialogRef.setClosable(false);
                      $('#formsend').submit()
                  }
              }, {
                  label: 'Cerrar',
                  action: function(dialogRef) {
                      dialogRef.close();
                  }
              }]
          });
      });
  });