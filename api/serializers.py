from rest_framework import serializers

from api.models import Assignment, Question


class StringSerializer(serializers.StringRelatedField):

    def to_internal_value(self, data):
        return value


class QuestionSerializer(serializers.ModelSerializer):
    question = StringSerializer()
    choices = StringSerializer(many=True)  # cuz

    # there are many question for each choices
    class Meta:
        model = Question
        fields = ('id', 'question', 'choices', 'order')


class AssignmentSerializer(serializers.ModelSerializer):
    questions = serializers.SerializerMethodField()
    teacher = StringSerializer(many=False)

    class Meta:
        model = Assignment
        fields = ('__all__')

    def get_questions(self, obj):
        questions = QuestionSerializer(obj.questions.all(), many=True).data
        return questions
