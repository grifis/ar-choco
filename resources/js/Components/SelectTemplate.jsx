import ChocoButton from "@/Components/ChocoButton";

const SelectTemplate = ({
    selectedTemplate,
    templates,
    changeTemplate,
    selectTemplate,
}) => {
    const toHome = () => {
        window.location.href = "/";
    };

    return (
        <>
            <div className="w-screen h-screen justify-center items-center flex flex-col">
                <p>メッセージカードのデザインを選ぶ</p>
                <div className="flex flex-wrap pr-3 pl-3">
                    {templates.map((template) => {
                        return (
                            <div key={template} className="w-1/3 p-3">
                                <div
                                    className={
                                        template == selectedTemplate
                                            ? "border-2 border-red-500"
                                            : ""
                                    }
                                >
                                    <img
                                        src={template}
                                        onClick={changeTemplate}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex justify-end pr-2">
                    <ChocoButton href="/" type="back">
                        戻る
                    </ChocoButton>
                    <ChocoButton onClick={selectTemplate}>決定</ChocoButton>
                </div>
            </div>
        </>
    );
};

export default SelectTemplate;
