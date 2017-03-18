            $('#singleFileUpload').submit(function(e){
                e.preventDefault();
                var allowed_files = ['csv', 'xls']
                var files = new FormData();
                if($.inArray($('.filesToUpload').val().split('.').pop(), allowed_files) == -1) {
                    files.length = 0;
                        swal({
                            title: "Unsupported file type",
                            text: "The file  "+$('.filesToUpload').val()+" is not supported",
                            type: "warning",
                        });

                }

                else{
                    files.append("key", $('.filesToUpload')[0].files[0])
                }


                if(files.length != 0){
                    $.ajax({
                        method: 'POST',
                        url: "/CustomerUpload/",
                        data: files,
                        contentType: false,
                        processData: false,
                    }).done(function(data) {
                        swal({
                            title: "Success",
                            text: "Data uploaded",
                            type: "success",
                            closeOnConfirm: false,
                        },
                            function(isConfirm){
                            if(isConfirm){
                                location.reload();
                            }
                        });
                    });
                }
                

            });
