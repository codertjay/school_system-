from rest_framework.routers import DefaultRouter
from api.views import AssignmentViewSets

router = DefaultRouter()
router.register(r'',AssignmentViewSets,basename='users')

urlpatterns = router.urls

