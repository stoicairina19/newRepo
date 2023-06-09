// js/components/MainPage.jsx
export default function InsertPage() {
	const insertRecord = async (e) => {
		e.preventDefault();

		const nume = document.getElementById('nume').value;
		const nota = document.getElementById('nota').value;
        const materie =document.getElementById('materie').value;
		const data = {
			nume: nume,
			nota: nota,
            materie:materie
		};
        

		console.log(data);

		fetch("/api/coll", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then( () => {
				console.log("A records has been uploaded")
				document.getElementById('nume').value = '';
				document.getElementById('nota').value = 0;
                document.getElementById('materie').value='';
			})
	}

	return (
		<section className={"bg-white"}>
			<div className={"container px-6 py-10 mx-auto"}>
				<h1 className={"w-[500px] mx-auto text-center text-6xl font-bold text-blue-600"}>Insert your fun fact</h1>
				<p className={"w-[1000px] mx-auto text-center mt-4 text-3xl text-blue-600"}>This is where you can insert your fun fact</p>

				<form>
					<div className="mb-6">
						<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student name</label>
						<input type="text" id="nume"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Nume" required/>
					</div>
                    <div className="mb-6">
						<label htmlFor="materie"
                        
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Materie</label>
						<textarea id="materie"
						          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Materie" required/>
					</div>
					<div className="mb-6">
						<label htmlFor="description"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student note</label>
						<textarea id="nota"
						          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Nota" required/>
					</div>
                  
					<button type="submit"
					        onClick={ insertRecord }
					        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
					</button>
				</form>

			</div>
		</section>
	)
}