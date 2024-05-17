


const CoursePropertiesForm = ({onSendForm, errors, courseData, onChange}) => {
  return (
    <form onSubmit={onSendForm} className={classNames(classes.CourseCreationForm)}>
      <div>
          <label htmlFor="name">Название курса:</label>
          <Error message={errors.name}>
              <Input type="text" name="name" id="name" value={courseData.name} onChange={onChange}/>
          </Error>
      </div>
      <div>
          <label htmlFor="term">Семестр:</label>
          <Error message={errors.term}>
              <Input type="text" name="term" id="term" value={courseData.term} onChange={onChange}/>
          </Error>
      </div>
      <Button>Создать</Button>
    </form>
  )
}

export default CoursePropertiesForm;