interface Props {
  id: string;
}

export const IdUser = ({ id }: Props) => {
  return (
    <div className="user-id">
      { id }
    </div>
  );
};
