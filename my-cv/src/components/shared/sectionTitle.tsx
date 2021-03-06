import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ISectionTitleProps {
	title: string;
	icon?: IconDefinition;
}

const SectionTitle: React.FC<ISectionTitleProps> = (props: ISectionTitleProps) => {
	return (
		<h3 className="my-3 mb-4">
			{
				props.icon && <FontAwesomeIcon icon={props.icon} className="me-2" />
			}

			{
				props.title
			}
		</h3>
	);
};

export default SectionTitle;
