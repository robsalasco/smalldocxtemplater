require 'sinatra'
require 'docx_templater'

get '/' do  
  erb :form
end  
     
post '/send' do  
    buffer = DocxTemplater.new.replace_file_with_content('template.docx',
        {
		:input1 => params[:input1],
		:input2 => params[:input2],
		:input3 => params[:input3],
		:input4 => params[:input4],
		:input5 => params[:input5],
        })
    File.open("output/" + Time.now.strftime("%Y-%m-%d-%H%M%S") + ".docx", "wb") {|f| f.write(buffer.string) }
    redirect '/' 
end
