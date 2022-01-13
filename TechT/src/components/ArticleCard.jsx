const ArticleCard = ({title, description}) => {
    return (
        <div className="cursor-pointer">
            <p className="text-2xl font-bold text-center articlecard text-white p-3">{title}</p>
            <p className="bg-white p-5 rounded-b-2xl shadow-md h-[80%]">{description}</p>
        </div>
    )
}

export default ArticleCard